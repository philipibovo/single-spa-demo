import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@bovo/app-menu",
  app: () => System.import("@bovo/app-menu"),
  activeWhen: ["/", "/cadastros", "/relatorios"],
});

registerApplication({
  name: "@bovo/app-registers",
  app: () => System.import("@bovo/app-registers"),
  activeWhen: ["/cadastros"],
});

registerApplication({
  name: "@bovo/app-reports",
  app: () => System.import("@bovo/app-reports"),
  activeWhen: ["/relatorios"],
});

start({
  urlRerouteOnly: true,
});
