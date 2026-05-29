import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonNativeProps
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  asChild?: false;
}

interface ButtonAsChildProps extends ButtonBaseProps {
  asChild: true;
  children: ReactElement<{ className?: string; "aria-disabled"?: boolean }>;
}

export type ButtonProps = ButtonNativeProps | ButtonAsChildProps;

export function Button({
  asChild,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(styles.button, styles[variant], styles[size], loading && styles.loading, className);
  const isDisabled = Boolean(disabled || loading);

  if (asChild) {
    if (!isValidElement(children)) {
      return null;
    }

    return cloneElement(children, {
      className: cn(classes, children.props.className),
      "aria-disabled": isDisabled || undefined,
    });
  }

  return (
    <button className={classes} disabled={isDisabled} {...props}>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
