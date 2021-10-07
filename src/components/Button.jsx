import clsx from 'clsx';

export function Button({ children, className = '', ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        'text-white bg-gray-900 inline-flex items-center rounded-lg text-center justify-between font-bold  animated-underline',
        className
      )}
    >
      {children}
    </button>
  );
}
