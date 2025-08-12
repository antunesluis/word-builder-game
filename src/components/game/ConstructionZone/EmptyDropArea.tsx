import React from 'react';

export const EmptyDropArea: React.FC = () => {
  return (
    <div className='text-center text-gray-400'>
      <div className='text-4xl mb-2'>👆</div>
      <p className='text-lg'>Arraste as sílabas aqui</p>
      <p className='text-sm mt-1'>para formar a palavra</p>
    </div>
  );
};
