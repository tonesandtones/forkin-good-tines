/**
 * DynamicComponentRenderer.tsx
 *
 * This component dynamically renders other components based on the provided `typeName`.
 * It uses a factory pattern to obtain the appropriate component and its rendering client.
 * If the component requires client-side data fetching, it wraps the component in an ApolloWrapper and Suspense for handling loading states.
 * If the component does not require client-side data fetching, it renders the component directly.
 *
 * Props:
 * - typeName: The type name of the component to render.
 * - componentProps: The properties to pass to the rendered component.
 */

import React, { FC, Suspense } from 'react';
import { componentFactory, ComponentProps } from './ComponentFactory';
import { ApolloWrapper } from './ApolloWrapper';

type Props = {
  typeName: string;
  componentProps?: ComponentProps;
};

const DynamicComponentRenderer: FC<Props> = ({ typeName, componentProps }) => {
  const [DynamicComponent, useClient] = componentFactory(typeName) || [];

  if (!DynamicComponent) {
    return <div>Unknown component type: {typeName}</div>;
  }

  const ComponentContent = <DynamicComponent {...componentProps} />;

  return useClient ? (
    <ApolloWrapper>{ComponentContent}</ApolloWrapper>
  ) : (
    ComponentContent
  );
};

export default DynamicComponentRenderer;
