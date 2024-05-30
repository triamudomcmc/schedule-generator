export interface BackgroundTheme {
  name: string
  value: string
}

export const BackgroundDecorations: Record<string, BackgroundTheme> = {
  none: {
    name: "ไม่มี",
    value: "none",
  },
  sticker: {
    name: "COOL KIDS starter pack",
    value: "sticker",
  },
  flower: {
    name: "Dans le Jardin",
    value: "flower",
  },
  colorful: {
    name: "Colorful",
    value: "colorful",
  },
  halloween: {
    name: "Halloween",
    value: "halloween",
  },
  sweetintherain: {
    name: "Sweet in the Rain",
    value: "sweeintherain",
  },
  nauticalmermaid: {
    name: "Nautical Mermaid",
    value: "nauticalmermaid",
  },
  nishikigoiwatergarden: {
    name: "Nishikigoi Water Garden",
    value: "nishikigoiwatergarden",
  },
}
