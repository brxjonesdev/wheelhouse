import { Card, CardContent } from '@/shared/components/shadcn/card';
import { Placeholder } from '@/shared/util/placeholder';

export default function EditorsPicks() {
  return (
    <section className="space-y-2">
      <div>
        <p className="font-mono text-md font-medium tracking-wider">Editor&apos;s Picks</p>
      </div>
      <Card className="shadow-none">
        <CardContent className="flex flex-col items-center justify-center  text-center">
          <Placeholder
          />
        </CardContent>
      </Card>
    </section>
  );
}
