import { makeInstaller } from "@bani/utils";
import components from "./components";
import "@bani/theme/index.css";
const installer = makeInstaller(components);

export * from "@bani/components";
export default installer;
