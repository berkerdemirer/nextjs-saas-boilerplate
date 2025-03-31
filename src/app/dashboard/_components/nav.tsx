'use client';

import { NavItem } from '@/types/dashboard-nav-item';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { DynamicIcon } from '@/components/ui/icons';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

interface NavProps extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: Array<NavItem>;
  showTooltips?: boolean;
}

export function Nav({ items, showTooltips = false, ...props }: NavProps) {
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
