import React, { ReactNode } from 'react';

interface ModalLayoutProps {
  children: ReactNode;
  bgGradient: string;
  animation?: string;
}

export const ModalLayout = ({ children, animation = '' }: ModalLayoutProps) => (
  <div className='fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4'>
    <div
      className={`bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto ${animation}`}
    >
      {children}
    </div>
  </div>
);

interface ModalHeaderProps {
  emoji: string;
  title: string;
  bgGradient: string;
}

export const ModalHeader = ({ emoji, title, bgGradient }: ModalHeaderProps) => (
  <div
    className={`bg-gradient-to-r ${bgGradient} rounded-t-3xl p-6 text-center text-white`}
  >
    <div className='text-6xl mb-2'>{emoji}</div>
    <h2 className='text-2xl font-bold'>{title}</h2>
  </div>
);
