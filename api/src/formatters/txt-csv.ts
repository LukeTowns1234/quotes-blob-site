export function txtcsvconver(input: string): string {
  const normalisedText = input.replace(/\r\n/g, "\n");
  let chars = normalisedText.split("\n");

  return chars.join(",");
}