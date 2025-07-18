import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

// ComponentProps<'button'> ensures that ButtonProps includes all props of a standard button
type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive'; // Prop specific to our button component
};

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  // using clsx to conditionally apply styles based on the variant prop
  const classes = clsx(
    styles.button,
    styles[variant], // This will dynamically access styles based on the variant prop
    className, // provides the user opportunity to add additional classes
  );

  return <button {...props} className={classes} />;
};
