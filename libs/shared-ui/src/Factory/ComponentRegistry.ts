// src/components/ComponentRegistry.ts
export class ComponentRegistry {
  private static components: Map<string, React.ComponentType<any>> = new Map();

  static registerComponent(name: string, component: React.ComponentType<any>) {
    if (this.components.has(name)) {
      console.warn(`Component with name ${name} is already registered.`);
    }
    this.components.set(name, component);
  }

  static getComponent(name: string): React.ComponentType<any> | undefined {
    return this.components.get(name);
  }

  static getAllComponents(): Map<string, React.ComponentType<any>> {
    return this.components;
  }
}
