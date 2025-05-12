import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[var(--primary)] text-white hover:bg-[var(--primary-700)]",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-[var(--border)] bg-white hover:bg-[var(--neutral-100)]",
      secondary: "bg-[var(--neutral-100)] text-[var(--neutral-900)] hover:bg-[var(--neutral-200)]",
      ghost: "hover:bg-[var(--neutral-100)]",
      link: "text-[var(--primary)] underline-offset-4 hover:underline"
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }

    return (
      <button
        className={`inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
