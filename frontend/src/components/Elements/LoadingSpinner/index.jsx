import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'blue' }) => {
  // Tailwind-Klassen für verschiedene Größen
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  // Tailwind-Klassen für verschiedene Farben
  const colorClasses = {
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500',
    purple: 'border-purple-500'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
};

export default LoadingSpinner