'use client';

import { config } from '@/config';
import { IconInnerShadowTop } from '@tabler/icons-react';
import * as React from 'react';
import { Nav } from '@/app/dashboard/_components/nav';
import { NavUser } from '@/app/dashboard/_components/nav-user';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar as SidebarPrimitive,
} from '@/components/ui/sidebar';

const userData = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/shadcn.jpg',
};

export function Sidebar({
  ...props
}: React.ComponentProps<typeof SidebarPrimitive>) {
  return (
    <SidebarPrimitive collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <Nav items={config.dashboard.mainNavItems} showTooltips />
        <Nav items={config.dashboard.secondaryNavItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </SidebarPrimitive>
  );
}
