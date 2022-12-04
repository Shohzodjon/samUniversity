import { createI18n } from "vue-i18n";
import uz from "./uz.json";
import ru from "./ru.json";
import en from "./eng.json";
const locale = localStorage.getItem("locale") || "uz";
const i18n = createI18n({
  locale,
  fallbackLocale: "uz",
  silentFallbackWarn: true,
  globalInjection: true,
  messages: {
    en,
    uz,
    ru,
  },
});
export default i18n;
