import React from 'react';
import { Card, CardContent, CardFooter } from '@/shared/components/shadcn/card';

import { Package, Clock } from 'lucide-react';
import { Placeholder } from '@/shared/util/placeholder';
export default function Playlists() {
  return (
    <section className="space-y-2">
      <div>
        <p className="font-mono text-md font-medium tracking-wider">Playlists</p>
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
