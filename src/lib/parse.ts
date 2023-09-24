export const parse = (s: string | object): string | object[] => {
  if (typeof s === "string") {
    const prefix = "hsl(var(";
    const suffix = "))";
    const start = s.indexOf(prefix) + prefix.length;
    const end = s.indexOf(suffix);
    const variable = `${s.substring(start, end)}`;
    return variable;
  } else {
    return Object.entries(s).map(([k, v]) => ({ [k]: parse(v) }));
  }
};
