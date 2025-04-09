import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SafeButtonProps extends React.ComponentProps<typeof Button> {
  variant?: "default" | "destructive" | "secondary"
}

export const SafeButton = ({ className, variant, ...props }: SafeButtonProps) => (
  <Button
    className={cn("font-semibold transition-all", className)}
    variant={variant}
    {...props}
  />
)