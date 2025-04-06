'use client';

import { appConfig } from '@/app-config';
import { IconInnerShadowTop } from '@tabler/icons-react';
import Link from 'next/link';
import * as React from 'react';
import { DashboardNav } from '@/components/dashboard/nav';
import { DashboardNavUser } from '@/components/dashboard/nav-user';
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

export function DashboardSidebar({
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
              <Link href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <DashboardNav items={appConfig.dashboard.mainNavItems} showTooltips />
        <DashboardNav
          items={appConfig.dashboard.secondaryNavItems}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <DashboardNavUser user={userData} />
      </SidebarFooter>
    </SidebarPrimitive>
  );
}
