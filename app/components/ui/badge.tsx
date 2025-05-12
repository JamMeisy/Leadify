import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[var(--primary)] text-white hover:bg-[var(--primary-700)]",
      secondary: "bg-[var(--neutral-100)] text-[var(--neutral-900)] hover:bg-[var(--neutral-200)]",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "text-[var(--neutral-700)] border border-[var(--border)]",
    }

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
