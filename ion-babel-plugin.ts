import * as t from `@babel/types`;
// import { compressSync, decompressSync, strFromU8, strToU8 } from 'fflate';

const DATA_ION_ID = "data-ion-id";
const DATA_ION_CALLER_ID = "data-ion-caller-id";

interface TemplateNode {
   path: string;
   startTag: TemplateTag;
   endTag?: TemplateTag;
   component?: string;
}

interface TemplateTag {
   start: TemplateTagPosition;
   end: TemplateTagPosition;
}

interface TemplateTagPosition {
   line: number;
   column: number;
}

function compress(json: Object) {
   // Convert JSON to base64 string
   const jsonStr = JSON.stringify(json);
   const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
   return base64;
}

function decompress(base64: string) {
   // Convert base64 back to JSON
   const jsonStr = decodeURIComponent(escape(atob(base64)));
   return JSON.parse(jsonStr);
}

function isReactFragment(openingElement: any): boolean {
   if (!openingElement || !openingElement.name) return false;

   const name = openingElement.name;

   // Check for <Fragment>
   if (t.isJSXIdentifier(name)) {
      return name.name === "Fragment";
   }

   // Check for <React.Fragment>
   if (t.isJSXMemberExpression(name)) {
      return (
         t.isJSXIdentifier(name.object) &&
         name.object.name === "React" &&
         t.isJSXIdentifier(name.property) &&
         name.property.name === "Fragment"
      );
   }

   return false;
}

// Helper to check if a node is a React component
function isReactComponent(path: any): boolean {
   // Check function name starts with capital letter
   if (path.node.id && path.node.id.name) {
      return /^[A-Z]/.test(path.node.id.name);
   }
   return false;
}

// Helper to create the destructured prop pattern
function createPropPattern(existingParams: any = null) {
   console.log(
      "📋 Creating prop pattern with existing params:",
      existingParams?.type || "none"
   );

   // If we have existing params in an object pattern, add our prop to it
   if (existingParams && t.isObjectPattern(existingParams)) {
      console.log(
         "🔍 Existing object pattern properties:",
         existingParams.properties.map((p: any) => p.key?.name || p.key?.value)
      );
      const properties = [...existingParams.properties];

      // Check if our property already exists
      const hasCallerId = properties.some(
         (prop) =>
            t.isObjectProperty(prop) &&
            ((t.isIdentifier(prop.key) &&
               prop.key.name === DATA_ION_CALLER_ID) ||
               (t.isStringLiteral(prop.key) &&
                  prop.key.value === DATA_ION_CALLER_ID))
      );

      if (!hasCallerId) {
         console.log("➕ Adding caller ID to existing object pattern");
         properties.unshift(
            t.objectProperty(
               t.stringLiteral(DATA_ION_CALLER_ID),
               t.identifier("dataIonCallerId"),
               true
            )
         );
      }

      return t.objectPattern(properties);
   }

   // If we have an identifier, create a new object pattern that includes it as a rest property
   if (existingParams && t.isIdentifier(existingParams)) {
      console.log(
         "🔄 Converting identifier to object pattern with rest:",
         existingParams.name
      );
      return t.objectPattern([
         t.objectProperty(
            t.stringLiteral(DATA_ION_CALLER_ID),
            t.identifier("dataIonCallerId"),
            true
         ),
         t.restElement(existingParams),
      ]);
   }

   console.log("📦 Creating new default prop pattern");
   // Default case: create new object pattern
   return t.objectPattern([
      t.objectProperty(
         t.stringLiteral(DATA_ION_CALLER_ID),
         t.identifier("dataIonCallerId"),
         true
      ),
      t.restElement(t.identifier("props")),
   ]);
}

// Helper to find the root JSX element
function findRootJSXElement(path: any) {
   let returnStatement = path
      .get("body")
      .get("body")
      .find((p: any) => p.isReturnStatement());
   if (!returnStatement) return null;

   let jsx = returnStatement.get("argument");
   // Handle potential wrapping expressions
   while (jsx && jsx.isJSXElement && !jsx.isJSXElement()) {
      if (jsx.isParenthesizedExpression()) {
         jsx = jsx.get("expression");
      } else {
         break;
      }
   }
   return jsx.isJSXElement() ? jsx : null;
}

// Helper to add the caller ID attribute to JSX opening element
function addCallerIdAttributeToJSX(jsxPath: any) {
   const openingElement = jsxPath.get("openingElement");
   const elementName = openingElement.node.name.name;
   console.log("🎯 Adding caller ID to JSX element:", elementName);

   const attributes = openingElement.node.attributes;
   console.log(
      "📝 Current attributes:",
      attributes.map((attr: any) => attr.name?.name)
   );

   // Check if the attribute already exists
   const hasCallerId = attributes.some(
      (attr: any) =>
         t.isJSXAttribute(attr) && attr.name.name === DATA_ION_CALLER_ID
   );

   if (!hasCallerId) {
      console.log("➕ Adding data-ion-caller-id attribute to", elementName);
      // Add data-ion-caller-id attribute
      attributes.push(
         t.jsxAttribute(
            t.jsxIdentifier(DATA_ION_CALLER_ID),
            t.jsxExpressionContainer(t.identifier("dataIonCallerId"))
         )
      );
   } else {
      console.log("⚠️ Caller ID already exists on", elementName);
   }
}

// Debug helper to log the transformed code
function logTransformedCode(path: any, stage: string) {
   try {
      const generated = path.hub.file.code;
      console.log(`🔍 ${stage} transformed code:`, generated);
   } catch (e) {
      console.log(`⚠️ Unable to log transformed code for ${stage}:`, e);
   }
}

export default function ionBabelPlugin(babel: any, options: any = {}): any {
   // Extract our options from the ionOptions field
   const { ionOptions = {} } = options;
   const {  enableIonJsxSrc = false } = ionOptions;

   console.log("🔵 Ion Babel Plugin - Received ionOptions:", ionOptions);
   console.log(
      "🔵 Ion Babel Plugin enabled:",
      enableIonJsxSrc,
      "(type:",
      typeof enableIonJsxSrc,
      ")"
   );

   // If not enabled, return a no-op visitor
   if (!enableIonJsxSrc) {
      console.log("🔵 Ion Babel Plugin disabled - returning no-op visitor");
      return {
         name: "@ion/babel-plugin",
         visitor: {},
      };
   }

   return {
      name: "@ion/babel-plugin",
      visitor: {
         Program: {
            enter(path: any, state: any) {
               console.log("\n🟣 Processing file:", state.file.opts.filename);
            },
            exit(path: any) {
               console.log(
                  "\n🟣 Final transformed code for:",
                  path.hub.file.opts.filename
               );
               logTransformedCode(path, "Program exit");
            },
         },
         FunctionDeclaration: {
            enter(path: any) {
               const componentName = path.node.id.name;
               console.log("🟢 Entering Function Component:", componentName);

               // Handle React component transformation
               if (isReactComponent(path)) {
                  console.log("🎯 Detected React Component:", componentName);

                  // Get the existing params or create new ones
                  const params = path.node.params;
                  if (params.length === 0) {
                     console.log(
                        "📝 Adding props pattern to component:",
                        componentName
                     );
                     params.push(createPropPattern());
                  } else {
                     const firstParam = params[0];
                     console.log(
                        "🔄 Transforming existing props for component:",
                        componentName
                     );
                     params[0] = createPropPattern(firstParam);
                  }

                  // Find and modify the root JSX element
                  const rootJSX = findRootJSXElement(path);
                  if (rootJSX) {
                     console.log(
                        "🎨 Adding caller ID to root JSX in component:",
                        componentName
                     );
                     addCallerIdAttributeToJSX(rootJSX);
                     logTransformedCode(path, `Function ${componentName}`);
                  }
               }
            },
            exit(path: any) {
               const componentName = path.node.id.name;
               console.log("🔴 Exiting Function Component:", componentName);
            },
         },
         VariableDeclarator(path: any) {
            if (!isReactComponent(path)) return;

            const componentName = path.node.id.name;
            console.log(
               "🟡 Processing Arrow Function Component:",
               componentName
            );

            const init = path.get("init");
            if (!init.isArrowFunctionExpression()) return;

            // Handle params
            const params = init.node.params;
            if (params.length === 0) {
               console.log(
                  "📝 Adding props pattern to arrow component:",
                  componentName
               );
               params.push(createPropPattern());
            } else {
               const firstParam = params[0];
               if (t.isIdentifier(firstParam)) {
                  console.log(
                     "🔄 Transforming existing props for arrow component:",
                     componentName
                  );
                  params[0] = createPropPattern();
               }
            }

            // Find and modify the root JSX element
            const body = init.get("body");
            let rootJSX;

            if (body.isBlockStatement()) {
               const returnStatement = body
                  .get("body")
                  .find((p: any) => p.isReturnStatement());
               if (returnStatement) {
                  rootJSX = returnStatement.get("argument");
               }
            } else {
               rootJSX = body;
            }

            if (rootJSX && rootJSX.isJSXElement()) {
               console.log(
                  "🎨 Adding caller ID to root JSX in arrow component:",
                  componentName
               );
               addCallerIdAttributeToJSX(rootJSX);
            }
         },
         JSXElement(path: any, state: any) {
            const filename = state.file.opts.filename;
            console.log("🟡 Processing JSX Element in file:", filename);

            // Helper to check if element is a custom component
            const isCustomComponent = (element: any) => {
               if (!element.name || !t.isJSXIdentifier(element.name))
                  return false;
               return /^[A-Z]/.test(element.name.name);
            };


            // Ignore node_modules
            if (filename.includes('node_modules')) {
               console.log("⚪️ Skipping node_modules file");
               return;
            }

            // Ignore React fragment
            if (isReactFragment(path.node.openingElement)) {
               console.log("⚪️ Skipping React Fragment");
               return;
            }

            // Ensure `loc` exists before accessing its properties
            if (
               !path.node.openingElement.loc ||
               !path.node.openingElement.loc.start ||
               !path.node.openingElement.loc.end
            ) {
               console.log("⚪️ Skipping element without location info");
               return;
            }

            const attributeValue = getTemplateNode(path, filename, []);
            console.log("🔷 Adding data-ion-id:", attributeValue);

            // Create the data-ion-id attribute
            const ionAttribute = t.jsxAttribute(
               t.jsxIdentifier(DATA_ION_ID),
               t.stringLiteral(attributeValue)
            );

            // If this is a custom component, also add data-ion-caller-id
            if (isCustomComponent(path.node.openingElement)) {
               console.log(
                  "🔷 Adding data-ion-caller-id to custom component:",
                  path.node.openingElement.name.name
               );
               const callerIdAttribute = t.jsxAttribute(
                  t.jsxIdentifier(DATA_ION_CALLER_ID),
                  t.stringLiteral(attributeValue)
               );
               path.node.openingElement.attributes.push(callerIdAttribute);
            }

            // Append the data-ion-id attribute to the element
            path.node.openingElement.attributes.push(ionAttribute);
         },
         ArrowFunctionExpression(path: any) {
            // Check if this arrow function is inside a map call
            const isInsideMap = path.findParent((p: any) => {
               return (
                  t.isCallExpression(p.node) &&
                  t.isMemberExpression(p.node.callee) &&
                  t.isIdentifier(p.node.callee.property) &&
                  p.node.callee.property.name === 'map'
               );
            });

            if (isInsideMap) {
               console.log("⚪️ Skipping arrow function inside map");
               return;
            }

            // Check if this is a component (either by parent variable name or by return value)
            const parent = path.parent;
            let isComponent = false;
            let componentName = "Anonymous";

            if (t.isVariableDeclarator(parent) && t.isIdentifier(parent.id)) {
               componentName = parent.id.name;
               isComponent = /^[A-Z]/.test(componentName);
            } else {
               // Check if it returns JSX
               const body = path.get("body");
               if (body.isJSXElement()) {
                  isComponent = true;
               }
            }

            if (isComponent) {
               console.log(
                  "\n🎯 Detected Arrow Function Component:",
                  componentName
               );

               // Transform params
               const params = path.node.params;
               if (params.length === 0) {
                  console.log(
                     "📝 Adding props pattern to arrow component:",
                     componentName
                  );
                  params.push(createPropPattern());
               } else {
                  const firstParam = params[0];
                  console.log(
                     "🔄 Transforming existing props for arrow component:",
                     componentName
                  );
                  params[0] = createPropPattern(firstParam);
               }

               // Find and modify the root JSX element
               let rootJSX = path.get("body");
               if (rootJSX.isBlockStatement()) {
                  const returnStatement = rootJSX
                     .get("body")
                     .find((p: any) => p.isReturnStatement());
                  if (returnStatement) {
                     rootJSX = returnStatement.get("argument");
                  }
               }

               if (rootJSX && rootJSX.isJSXElement()) {
                  console.log(
                     "🎨 Adding caller ID to root JSX in arrow component:",
                     componentName
                  );
                  addCallerIdAttributeToJSX(rootJSX);
                  logTransformedCode(path, `Arrow Function ${componentName}`);
               }
            }
         },
      },
   };
}

function getTemplateNode(
   path: any,
   filename: string,
   componentStack: string[]
): string {
   const startTag: TemplateTag = getTemplateTag(path.node.openingElement);
   const endTag: TemplateTag | undefined = path.node.closingElement
      ? getTemplateTag(path.node.closingElement)
      : undefined;
   const componentName =
      componentStack.length > 0
         ? componentStack[componentStack.length - 1]
         : undefined;
   const domNode: TemplateNode = {
      path: filename,
      startTag,
      endTag,
      component: componentName,
   };
   return compress(domNode);
}

function getTemplateTag(element: any): TemplateTag {
   return {
      start: {
         line: element.loc.start.line,
         column: element.loc.start.column + 1,
      },
      end: {
         line: element.loc.end.line,
         column: element.loc.end.column,
      },
   };
}
