import React, { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors duration-200">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={cn(
            "flex h-12 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 px-4 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 focus-visible:border-primary dark:focus-visible:border-primary transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 text-neutral-900 dark:text-white",
            icon && "pl-11", // Add padding if icon exists
            error && "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 font-medium ml-1">{error}</p>}
    </div>
  );
};
