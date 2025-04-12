'use client';

import { DynamicIcon } from '@/src/components/ui/icons';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/src/components/ui/sidebar';
import { NavItem } from '@/src/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavProps extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: Array<NavItem>;
  showTooltips?: boolean;
}

export function DashboardNav({
  items,
  showTooltips = false,
  ...props
}: NavProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={showTooltips ? item.title : undefined}
                asChild
                isActive={pathname === item.url}
              >
                <Link href={item.url}>
                  {item.icon && <DynamicIcon name={item.icon} />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
