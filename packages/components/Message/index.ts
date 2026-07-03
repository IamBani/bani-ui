import Message from "./methods";
import { withInstallFunction } from "@bani/utils";

export const BnMessage = withInstallFunction(Message, "$message");
export * from "./types";
