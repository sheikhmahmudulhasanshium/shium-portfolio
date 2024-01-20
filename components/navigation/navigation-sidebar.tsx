// NavigationSidebar.tsx
"use client"
import { ModeToggle } from "../mode-toggle";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const NavigationSidebar = () => {
  return (
    <>
      <NavigationMenu className="">
        <NavigationMenuList className="flex flex-col gap-4 space-x-4 ">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/portfolio">Portfolio</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuLink href="/about">About Me</NavigationMenuLink>
          </NavigationMenuItem>
          {/* Add more menu items as needed */}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default NavigationSidebar;
