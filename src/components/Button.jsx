import clsx from 'clsx';

export function Button({ children, className = '', ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        'text-white bg-gray-900 inline-flex items-center text-center justify-between font-bold hover:text-primary-500 animated-underline',
        className
      )}
    >
      {children}
    </button>
  );
}
