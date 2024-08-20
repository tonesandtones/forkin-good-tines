// src/components/ComponentFactory.tsx
import React from 'react';
import { ComponentRegistry } from './ComponentRegistry';

interface ComponentFactoryProps {
  name: string;
  searchParams?: URLSearchParams;
  props?: Record<string, any>;
}

const ComponentFactory: React.FC<ComponentFactoryProps> = ({
  name,
  props = {},
  searchParams,
}) => {
  const Component = ComponentRegistry.getComponent(name);

  if (!Component) {
    console.error(`Component with name ${name} not found.`);
    return null;
  }

  return <Component {...props} searchParams={searchParams} />;
};

export { ComponentFactory };
