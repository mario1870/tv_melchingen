import React from 'react';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerColor = 'blue' | 'red' | 'green' | 'purple';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue' }) => {
  // Tailwind-Klassen für verschiedene Größen
  const sizeClasses: Record<SpinnerSize, string> = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  // Tailwind-Klassen für verschiedene Farben
  const colorClasses: Record<SpinnerColor, string> = {
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

export default LoadingSpinner;