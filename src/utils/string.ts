
export function capitalize(text: string) {
  return `${text[0].toUpperCase()}${text.slice(1)}`
}

export function capitalizeAll(text: string, separator = ' ', new_separator = separator) {
  return text.split(separator).map((slice) => (capitalize(slice))).join(new_separator)
}