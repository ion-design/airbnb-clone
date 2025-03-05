import { FC } from 'react';

interface Property {
  location: string;
  price: number;
  coordinates: [number, number];
}

interface MapSectionProps {
  properties: Property[];
}

const MapSection: FC<MapSectionProps> = ({ properties }) => {
  return (
    <div className="h-[400px] rounded-xl overflow-hidden mb-12 relative bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=51.509865,-0.118092&zoom=12&size=1200x400&scale=2&maptype=roadmap&markers=color:red|51.5074,-0.1967|51.5245,-0.0767|51.5007,-0.1926|51.5390,-0.1426&key=YOUR_API_KEY')`,
        filter: 'grayscale(0.1)'
      }}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">Map view currently unavailable</p>
          <p className="text-xs text-gray-500">Showing London area properties</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="bg-white rounded-lg shadow-lg p-3">
          <div className="flex flex-col gap-2">
            {properties.map((property, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-sm font-medium">{property.location} - £{property.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
ult MapSection;
act>
    </div>
  );
};

export default MapSection;
screenControl: false
        }}
      >
        {properties.map((property, index) => (
          <MarkerF
            key={index}
            position={{
              lat: property.coordinates[1],
              lng: property.coordinates[0]
            }}
            label={{
              text: `£${property.price}`,
              className: 'bg-white px-2 py-1 rounded-full shadow-lg font-semibold text-sm'
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapSection;
