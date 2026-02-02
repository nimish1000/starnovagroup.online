import { cn } from "../../lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2",
        {
          "bg-brand-light/60 border border-brand-accent/20 text-brand": variant === "default",
          "bg-surface border border-border text-text-primary": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}
