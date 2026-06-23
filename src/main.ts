import "./style.css";
import { initI18n } from "./i18n";
import { initReveal } from "./reveal";

function boot(): void {
  initI18n();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
