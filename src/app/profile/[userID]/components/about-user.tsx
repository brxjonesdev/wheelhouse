import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/shadcn/avatar';
import React from 'react';
import { Button } from '@/shared/components/shadcn/button';
import { Card, CardTitle } from '@/shared/components/shadcn/card';
import { Edit2 } from 'lucide-react';

export default function AboutUser({ userID }: { userID: string }) {
  console.log('User ID in AboutUser:', userID);
  // This comp shows the user
  return (
    <section className="flex gap-2 flex-col border-b-1 border-black/5 pb-4 mb-4 bg-white font-sans tracking-wide">
      <div className="flex items-center gap-4 lg:gap-6 ">
        <Avatar className="h-full w-full lg:max-h-[100px] lg:max-w-[100px] max-h-[50px] max-w-[50px] rounded-lg">
          <AvatarImage
            className="lg:max-h-[100px] lg:max-w-[100px] max-h-[50px] max-w-[50px] object-cover "
            src="https://theneedledrop.com/content/images/2024/11/Snapinsta.app_436509029_1098148308150186_1722421214884056536_n_1080-1.jpg"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-row gap-6 ">
          <div className="lg:border-r-1 lg:border-black/5 w-full">
            <h1 className="text-xl font-heading tracking-wider font-medium">
              Bae Joo-hyun
            </h1>
            <p className="text-xs text-muted-foreground">@ireneRedVelvet</p>
            <p className="text-sm text-muted-foreground hidden lg:block mt-1 max-w-[450px]">
              Known as the member and leader of the South Korean girl group Red Velvet,
              and its sub-unit Red Velvet – Irene & Seulgi.
            </p>
          </div>
          {/* Now Playing Card */}
          <Card className="hidden lg:flex items-center gap-2 w-full min-h-full shadow-none bg-black/5">
            <CardTitle></CardTitle>
          </Card>
        </div>
        <Button variant="outline" className="ml-auto shadow-none self-end">
          <Edit2 /> Edit Stage{' '}
        </Button>
      </div>
      <div className="lg:hidden">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
          velit ex. Mauris dapibus risus quis suscipit vulputate.
        </p>
      </div>
     
    </section>
  );
}
