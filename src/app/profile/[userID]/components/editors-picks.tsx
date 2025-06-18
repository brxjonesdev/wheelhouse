import { Package, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/shared/components/shadcn/card"

export default function EditorsPicks() {
  return (
    <section className="space-y-2">
      <div>
        <p className="font-heading text-xl tracking-wide">Editor&apos;s Picks</p>
      </div>
      <Card className="shadow-none">
        <CardContent className="flex flex-col items-center justify-center py-6 px-6 text-center">
          <div className="mb-4 rounded-full bg-muted p-4">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mb-2 text-lg font-semibold font-heading tracking-wide">Editor&apos;s Picks Coming Soon</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            We&apos;re working hard to bring you the Editor&apos;s Picks feature. Stay tuned for updates!
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>Feature in development</span>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
