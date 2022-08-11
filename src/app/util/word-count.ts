export const wordExp = /([a-z]+)[^a-z]/ig;

export const expandedText = (lines: string | string[] ) => {
  if (Array.isArray(lines))
    return ` ${lines.join(' ')} `;
  return ` ${lines} `;
}