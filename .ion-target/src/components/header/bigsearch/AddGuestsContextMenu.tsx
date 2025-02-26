import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useState, useMemo } from 'react';
import { AddGuestsContextMenuOptions } from '../../../@types/types';

type GuestCounts = {
  [key: string]: number;
};

const MAX_GUESTS = {
  Adults: 16,
  Children: 15,
  Infants: 5,
  Pets: 5,
  Luggage: 10
};

const AddGuestsContextMenu = () => {
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    Adults: 0,
    Children: 0,
    Infants: 0,
    Pets: 0,
    Luggage: 0
  });

  const totalGuests = useMemo(() => {
    return guestCounts.Adults + guestCounts.Children;
  }, [guestCounts.Adults, guestCounts.Children]);

  const handleIncrement = (title: string) => {
    if (guestCounts[title] < MAX_GUESTS[title as keyof typeof MAX_GUESTS]) {
      if ((title === 'Children' || title === 'Adults') && totalGuests >= 16) {
        return;
      }
      setGuestCounts(prev => ({
        ...prev,
        [title]: prev[title] + 1
      }));
    }
  };

  const handleDecrement = (title: string) => {
    if (guestCounts[title] > 0) {
      if (title === 'Adults' && guestCounts.Adults === 1 && guestCounts.Children > 0) {
        return;
      }
      setGuestCounts(prev => ({
        ...prev,
        [title]: prev[title] - 1
      }));
    }
  };

  return (
    <div className='absolute top-20 left-0 bg-white px-6 rounded-3xl shadow-lg w-full'>
      {AddGuestsContextMenuOptions.map(({ title, text }) => (
        <div
          key={title}
          className='flex items-center justify-between py-5 border-b border-gray-300'
        >
          <div>
            <p className='font-bold'>{title}</p>
            <p className='text-sm mt-1'>{text}</p>
          </div>
          <div className='flex items-center space-x-3'>
            <div 
              className={`flex items-center justify-center cursor-pointer ${
                guestCounts[title] === 0 || 
                (title === 'Adults' && guestCounts.Adults === 1 && guestCounts.Children > 0)
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              onClick={() => handleDecrement(title)}
            >
              <MinusIcon className='h-7 w-7 p-1 rounded-full border border-neutral-500' />
            </div>
            <p className='font-medium text-center w-5'>{guestCounts[title]}</p>
            <div 
              className={`flex items-center justify-center ${
                guestCounts[title] >= MAX_GUESTS[title as keyof typeof MAX_GUESTS] ||
                ((title === 'Children' || title === 'Adults') && totalGuests >= 16)
                  ? 'opacity-30 cursor-not-allowed'
                  : 'opacity-60 cursor-pointer hover:opacity-100'
              }`}
              onClick={() => handleIncrement(title)}
            >
              <PlusIcon className='h-7 w-7 p-1 rounded-full border border-neutral-500' />
            </div>
          </div>
        </div>
      ))}
      <div className='py-4 text-sm text-gray-500'>
        {totalGuests > 0 && (
          <p>Total guests: {totalGuests}</p>
        )}
        <p>This place has a maximum of 16 guests, not including infants, pets, and luggage.</p>
      </div>
    </div>
  );
};

export default AddGuestsContextMenu;
