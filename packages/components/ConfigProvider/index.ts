import ConfigProviderDropdown from "./ConfigProvider.vue";
import { withInstall } from "@bani/utils";

export const BnConfigProvider = withInstall(ConfigProviderDropdown);

export * from "./types";
