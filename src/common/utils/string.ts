export const replace = (str: string, data: Record<string, any>) =>
  str.replace(/\$\(([^\)]+)?\)/g, function ($1, $2) {
    return data[$2];
  });
