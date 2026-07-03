// ../../node_modules/.pnpm/@vitepress-demo-preview+core@0.3.0/node_modules/@vitepress-demo-preview/core/dist/index.js
var s = { copySuccessText: "复制成功", copyCode: "复制代码", foldCode: "折叠代码", expandCode: "展开代码", hideSourceCode: "隐藏源代码" };
var d = { zh: { copySuccessText: "复制成功", copyCode: "复制代码", foldCode: "折叠代码", expandCode: "展开代码", hideSourceCode: "隐藏源代码" }, en: { copySuccessText: "Code copied to clipboard!", copyCode: "Copy code", foldCode: "Fold code", expandCode: "Expand code", hideSourceCode: "Hide source code" } };
var r = { copySuccessText: "复制成功", vueApp: void 0, i18n: d, defaultLanguage: "zh" };
function p(n = "zh") {
  if (typeof window == "undefined") return n;
  let e = window.location.pathname.split("/").filter((i) => i.length > 0), t = /^[a-z]{2}(-[A-Z]{2})?$/;
  for (let i of e) if (t.test(i)) return i;
  return n;
}
function u(n, o, e) {
  if (e.i18n && e.i18n[o] && e.i18n[o][n]) return e.i18n[o][n];
  let t = e.defaultLanguage || "zh";
  return e.i18n && e.i18n[t] && e.i18n[t][n] ? e.i18n[t][n] : n === "copySuccessText" && e.copySuccessText ? e.copySuccessText : s[n] || n;
}
function g(n) {
  let o = n.i18n ? { ...d, ...n.i18n } : d, e = Object.assign({}, r, n, { i18n: o });
  if (!e.defaultLanguage && e.i18n) {
    let t = Object.keys(e.i18n);
    e.defaultLanguage = t[0] || "zh";
  }
  return typeof window != "undefined" && (window.demoPreviewConfig = e), e;
}
export {
  g as defineClientComponentConfig,
  p as getCurrentLanguage,
  u as getI18nText
};
//# sourceMappingURL=@vitepress-demo-preview_core.js.map
