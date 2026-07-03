import { vLoading } from "./directive";
import { Loading } from "./service";

import type { App } from "vue";
export * from "./types";
export const BnLoading = {
  name: "BnLoading",
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default BnLoading;

export {
  vLoading,
  vLoading as BnLoadingDirective,
  Loading as BnLoadingService,
};
