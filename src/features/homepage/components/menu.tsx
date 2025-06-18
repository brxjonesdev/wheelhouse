import { Card, CardContent } from '@/shared/components/shadcn/card';
import React from 'react';
import MenuItem from './menu-item';
import { Archive, DiscAlbum, Shuffle } from 'lucide-react';
import { Separator } from '@/shared/components/shadcn/separator';

export default function Menu() {
  const menuOptions = [
    {
      label: 'Compare Orbits',
      description: 'Compare music tastes with friends',
      icon: <Shuffle className="h-4 w-4" />,
    },
    {
      label: 'RecBin',
      description: 'Send and receive song recommendations',
      icon: <Archive className="h-4 w-4" />,
    },
    {
      label: 'Crates',
      description: 'Discover community-curated collections',
      icon: <DiscAlbum className="h-4 w-4" />,
    },
  ];

  return (
    <section className="w-4/12">
      <Card className="shadow-none p-0">
        <CardContent className="p-2 ">
          <div className="flex flex-col gap-2">
            {menuOptions.map((option, index) => (
              <>
                <MenuItem
                  key={index}
                  label={option.label}
                  description={option.description}
                  icon={option.icon} // Assuming you might want to add icons later
                />

                {index < menuOptions.length - 1 && <Separator className="" />}
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
