import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

// ComponentProps<'button'> ensures that ButtonProps includes all props of a standard button
type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive'; // Prop specific to our button component
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  // using clsx to conditionally apply styles based on the variant & size props
  const classes = clsx(
    'bg-indigo-500 hover:bg-indigo-400',
    styles.button,
    styles[variant], // This will dynamically access styles based on the variant prop
    styles[size],
  );

  return <button className={classes} {...props} />; // inserting {...props} to pass down all other button attributes like onClick, disabled, etc. and to allow overriding styles including with className
};
