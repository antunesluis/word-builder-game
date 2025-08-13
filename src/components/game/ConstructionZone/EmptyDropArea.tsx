import React from 'react';

export const EmptyDropArea: React.FC = () => {
  return (
    <div className='text-center text-gray-500'>
      <div className='text-4xl mb-2'>👆</div>
      <p className='text-lg'>ARRASTE AS SÍLABAS AQUI</p>
      <p className='text-sm mt-1'>PARA FORMAR A PALAVRA</p>
    </div>
  );
};
