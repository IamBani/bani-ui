import type { App, Plugin } from "vue";
import { each } from "lodash-es";
type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const install = (app: App) => each(components, (c) => app.use(c));
  return install as Plugin;
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  };
  return component as SFCWithInstall<T>;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    // 向 app.config.globalProperties 中添加一些全局实例属性或方法
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCWithInstall<T>;
};
