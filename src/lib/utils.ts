export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href);
}

export function withNewTabLabel(label: string) {
  return `${label}, abre em nova aba`;
}
