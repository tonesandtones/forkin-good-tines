/**
 * @file ComponentRegistry.ts
 *
 * @description
 * This module provides a registry for React components. It allows for components to be
 * registered, retrieved, and listed in a centralized manner.
 *
 * @module ComponentRegistry
 */
export class ComponentRegistry {
  private static components = new Map<string, React.ComponentType<never>>();

  static registerComponent(
    name: string,
    component: React.ComponentType<never>
  ) {
    if (this.components.has(name)) {
      console.warn(`Component with name ${name} is already registered.`);
    } else {
      this.components.set(name, component);
    }
  }

  static getComponent(name: string): React.ComponentType<never> | undefined {
    return this.components.get(name);
  }

  static getAllComponents(): ReadonlyMap<string, React.ComponentType<never>> {
    return this.components;
  }
}
