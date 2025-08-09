import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-blue-500 hover:bg-blue-600 text-white 
      focus:ring-blue-500 shadow-lg hover:shadow-xl
      transform hover:scale-105 active:scale-95
    `,
    secondary: `
      bg-gray-200 hover:bg-gray-300 text-gray-800
      focus:ring-gray-500 shadow-md hover:shadow-lg
    `,
    success: `
      bg-green-500 hover:bg-green-600 text-white
      focus:ring-green-500 shadow-lg hover:shadow-xl
      transform hover:scale-105 active:scale-95
    `,
    danger: `
      bg-red-500 hover:bg-red-600 text-white
      focus:ring-red-500 shadow-lg hover:shadow-xl
      transform hover:scale-105 active:scale-95
    `
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClassName = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
