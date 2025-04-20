'use client';

import {
  type Icon,
  IconBrandGithub,
  IconCheck,
  IconHome,
  IconInnerShadowTop,
  IconSettings,
  IconShoppingCart,
  IconUsers,
} from '@tabler/icons-react';

const iconMap = {
  home: IconHome,
  users: IconUsers,
  settings: IconSettings,
  'brand-github': IconBrandGithub,
  'inner-shadow-top': IconInnerShadowTop,
  'shopping-cart': IconShoppingCart,
  check: IconCheck,
} as const;

export type IconType = keyof typeof iconMap;

export function DynamicIcon({
  name,
  ...props
}: { name: IconType } & React.ComponentProps<Icon>) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
