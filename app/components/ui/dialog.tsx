import * as React from "react"
import { X } from 'lucide-react'

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => onOpenChange?.(false)}
      />
      {children}
    </div>
  )
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={`fixed left-[50%] top-[50%] z-50 max-h-[90vh] w-[90vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-xl bg-white p-6 shadow-lg animate-in fade-in-0 zoom-in-95 ${className}`}
    >
      {children}
    </div>
  )
)
DialogContent.displayName = "DialogContent"

const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}>
    {children}
  </div>
)

const DialogTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogClose: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <button
    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
    onClick={onClose}
  >
    <X className="h-6 w-6" />
    <span className="sr-only">Close</span>
  </button>
)

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose }
