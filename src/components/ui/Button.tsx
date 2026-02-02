import * as React from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-brand text-white hover:bg-brand-hover hover:-translate-y-0.5 shadow-md shadow-brand/25": variant === "primary",
            "bg-white border border-border text-text-primary hover:bg-surface hover:border-brand-accent/30": variant === "secondary",
            "bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary": variant === "ghost",
            "text-sm px-4 py-2": size === "sm",
            "text-sm px-5 py-2.5": size === "md",
            "text-base px-7 py-3": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
