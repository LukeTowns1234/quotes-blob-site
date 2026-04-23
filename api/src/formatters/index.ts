export type FormatterAction = "uppercase" | "sentencecase" | "txtcsvconver";
export type FormatterFn = (input: string) => string;

import { uppercase } from "./uppercase";
import { sentencecase } from "./sentencecase";
import { txtcsvconver } from "./txt-csv";

export const FORMATTERS: Record<FormatterAction, FormatterFn> = {
  uppercase,
  sentencecase,
  txtcsvconver
};
