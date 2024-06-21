export function truncateString(str: string, length?: number) {
  const len = length||30;
  if (str.length <= len) {
    return str;
  } else {
    return str.substring(0, len) + '...';
  }
}
