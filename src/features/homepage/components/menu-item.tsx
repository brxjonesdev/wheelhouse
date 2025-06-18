import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type MenuItemProps = Readonly<{
  label: string;
  description: string;
  icon: React.ReactNode;
}>;

export default function MenuItem({ label, description, icon }: MenuItemProps) {
  function formatHref(label: string): string {
    // Convert label to lowercase and replace spaces with hyphens
    return `/${label.toLowerCase().replace(/\s+/g, '-')}`;
  }
  return (
    <Link
      href={formatHref(label)}
      className="hover:bg-gray-100 p-3 rounded-lg flex items-center transition-colors duration-200"
    >
      <div className="flex items-center gap-3 w-full">
        <div className="h-4 w-4 mr-2">{icon}</div>
        <div className="flex flex-col">
          <span className="font-semibold">{label}</span>
          <span className="text-xs text-gray-500">{description}</span>
        </div>
        <ArrowRight className="ml-auto h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
