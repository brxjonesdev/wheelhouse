import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/shared/components/shadcn/menubar"
import { Archive, DiscAlbum, Shuffle } from "lucide-react"

export default function Menu() {
  const menuOptions = [
    {
      label: "Compare Orbits",
      description: "Compare music tastes with friends",
      icon: <Shuffle className="h-4 w-4" />,
    },
    {
      label: "RecBin",
      description: "Send and receive song recommendations",
      icon: <Archive className="h-4 w-4" />,
    },
    {
      label: "Crates",
      description: "Discover community-curated collections",
      icon: <DiscAlbum className="h-4 w-4" />,
    },
  ]

  return (
    <Menubar className="shadow-none w-full self-end">
        {menuOptions.map((option, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger className="flex items-center gap-2 bg-black/5 hover:bg-black/10 text-sm cursor-pointer">
              {option.icon}
              {option.label}
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <div className="flex flex-col">
                  <span className="font-medium">{option.label}</span>
                  <span className="text-sm text-muted-foreground">{option.description}</span>
                </div>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
  )
}
