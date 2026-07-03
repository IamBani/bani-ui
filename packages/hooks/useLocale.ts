import { computed, inject, unref, type Ref } from "vue";
import { omit } from "lodash-es";
import { createI18n, i18nSymbol } from "vue3-i18n";
import type { I18nInstance } from "vue3-i18n";
import type { Language } from "@bani/locale";
import { en as English } from "@bani/locale";

export function useLocale(localeOverrides?: Ref<Language>) {
  if (!localeOverrides) {
    return computed(() => {
      const injected = inject(i18nSymbol);
      const instance =
        unref(injected) ??
        createI18n({ locale: English.name, messages: { en: English.el } });
      return omit(<I18nInstance>instance, "install");
    });
  }

  return computed(() =>
    omit(
      createI18n({
        locale: localeOverrides.value.name,
        messages: {
          en: English.el,
          [localeOverrides.value.name]: localeOverrides.value.el,
        },
      }),
      "install",
    ),
  );
}

export default useLocale;
