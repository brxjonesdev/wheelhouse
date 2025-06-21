import { Construction, Clock, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlaceholderProps {
  title?: string
  description?: string
  icon?: "construction" | "clock" | "wrench"
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Placeholder({
  title = "Feature Coming Soon",
  description = "This feature is currently under development and will be available soon.",
  icon = "construction",
  className,
  size = "md",
}: PlaceholderProps) {
  const icons = {
    construction: Construction,
    clock: Clock,
    wrench: Wrench,
  }

  const Icon = icons[icon]

  const sizeClasses = {
    sm: "min-h-32 p-4",
    md: "min-h-48 p-6",
    lg: "min-h-64 p-8",
  }

  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/10 text-center",
        sizeClasses[size],
        className,
      )}
    >
      <Icon className={cn("mb-3 text-muted-foreground/50", iconSizes[size])} />
      <h3 className={cn("font-semibold text-muted-foreground mb-2", textSizes[size])}>{title}</h3>
      <p
        className={cn(
          "text-muted-foreground/75 max-w-sm",
          size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base",
        )}
      >
        {description}
      </p>
    </div>
  )
}
