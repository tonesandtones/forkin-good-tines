import { BlogList, CallToAction, ContentPageHero } from '@sharknado/shared-ui';

// Define a specific type for component props, which can be extended as needed.
export type ComponentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

// Use a more descriptive type alias for component entries in the map.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentEntry = [any, boolean];

// Initialize the components map with the defined type.
const components: Map<string, ComponentEntry> = new Map([
  ['ComponentContentPageHero', [ContentPageHero, false]],
  ['ComponentContentCallToAction', [CallToAction, false]],
  ['ComponentContentBlogListing', [BlogList, true]],
]);

/**
 * Factory function to retrieve the component and its associated metadata by type name.
 *
 * @param typeName - The name of the component type to retrieve.
 * @returns A tuple containing the component and its associated flag, or null if not found.
 */
export const componentFactory = (typeName: string): ComponentEntry | null => {
  const componentEntry = components.get(typeName);

  if (!componentEntry) {
    console.warn(
      `Component of type "${typeName}" not found in the component map.`
    );
    return null;
  }

  return componentEntry;
};
