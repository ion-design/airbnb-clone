export const AddGuestsContextMenuOptions = [
  {
    title: 'Adults',
    text: 'Ages 13 or above',
  },
  {
    title: 'Children',
    text: 'Ages 2-12',
  },
  {
    title: 'Infants',
    text: 'Under 2',
  },
  {
    title: 'Pets',
    text: 'Service animals welcome',
  },
  {
    title: 'Luggage',
    text: 'Number of bags',
  },
] as const;

export const BigSearchItemIds = {
  where: 'where',
  check_in: 'check_in',
  check_out: 'check_out',
  who: 'who',
} as const;

export const CheckInCheckOutContextMenuTabs = ['Choose Dates', 'Flexible'] as const;

export const SearchDestinationContextMenuOptions = [
  'Flexible',
  'Europe',
  'United Kingdom',
  'Southeast Asia',
  'United States',
  'Caribbean',
] as const;

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const NumDaysInMonth = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
} as const;
