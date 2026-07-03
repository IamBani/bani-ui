import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { withInstall } from "@bani/utils";

export const BnDropdown = withInstall(Dropdown);
export const BnDropdownItem = withInstall(DropdownItem);

export * from "./types";
