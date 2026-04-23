export function txtcsvconver(input: string): string {
  let chars = input.split("");

  for (let i = 0; i < chars.length; i++) {
    let c = chars[i];

    if (c === "\r\n") {
      c = ",";
      continue;
    }
  }

  return chars.join("");
}