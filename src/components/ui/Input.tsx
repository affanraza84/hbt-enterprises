import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-dark mb-1.5 uppercase tracking-wider text-xs">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`flex h-11 w-full rounded-lg border-2 border-neutral-default bg-white px-4 py-2 text-primary font-medium placeholder:text-neutral-dark/50 focus:outline-none focus:border-accent focus:ring-0 transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-neutral-light ${
          error ? 'border-danger focus:border-danger' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-danger font-medium">{error}</p>}
    </div>
  );
};
