import { hexToRgbA } from "@utils/hexToRgb"

type ColorType = {
  r: string
  g: string
  b: string
  a: string
}

export interface ColorTheme {
  name: string
  bg: ColorType
  t1: ColorType
  t2: ColorType
  c1: ColorType
  c2: ColorType
  c3: ColorType
  c4: ColorType
  c5: ColorType
}

export const DefaultTheme: Record<string, ColorTheme> = {
  Christmas: {
    name: "Christmas",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#A40A14"),
    t2: hexToRgbA("#2B4A05"),
    c1: hexToRgbA("#4B6C57"),
    c2: hexToRgbA("#718049"),
    c3: hexToRgbA("#B19B8C"),
    c4: hexToRgbA("#9A715D"),
    c5: hexToRgbA("#B0000C"),
  },
  Pink: {
    name: "Tooth Fairy",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#D2488B"),
    t2: hexToRgbA("#EAA4C6"),
    c1: hexToRgbA("#EDB7D2"),
    c2: hexToRgbA("#EAA4C6"),
    c3: hexToRgbA("#E387B3"),
    c4: hexToRgbA("#DD6EA5"),
    c5: hexToRgbA("#CF5893"),
  },
  Purple: {
    name: "The Witches’ Craft",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#8861DC"),
    t2: hexToRgbA("#B99CF8"),
    c1: hexToRgbA("#B99CF8"),
    c2: hexToRgbA("#A787EC"),
    c3: hexToRgbA("#916CDF"),
    c4: hexToRgbA("#8860DC"),
    c5: hexToRgbA("#7754C1"),
  },
  Red: {
    name: "Bloody Mary",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#D17474"),
    t2: hexToRgbA("#E28B8B"),
    c1: hexToRgbA("#EBB8B8"),
    c2: hexToRgbA("#E49E9E"),
    c3: hexToRgbA("#E08484"),
    c4: hexToRgbA("#D17474"),
    c5: hexToRgbA("#BA5757"),
  },
  Blue: {
    name: "Fairy Godmother",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#53ABDC"),
    t2: hexToRgbA("#88CBF1"),
    c1: hexToRgbA("#9CD7F8"),
    c2: hexToRgbA("#88CBF1"),
    c3: hexToRgbA("#65BDEE"),
    c4: hexToRgbA("#53ABDC"),
    c5: hexToRgbA("#2B96D2"),
  },
  Orange: {
    name: "Jack O’Lantern",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#EA984D"),
    t2: hexToRgbA("#F8BA82"),
    c1: hexToRgbA("#F8BA82"),
    c2: hexToRgbA("#F1AB6A"),
    c3: hexToRgbA("#EA984D"),
    c4: hexToRgbA("#DD8E44"),
    c5: hexToRgbA("#D3741A"),
  },
  Black: {
    name: "Dracula Untold",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#828282"),
    t2: hexToRgbA("#A8A8A8"),
    c1: hexToRgbA("#ADADAD"),
    c2: hexToRgbA("#989898"),
    c3: hexToRgbA("#828282"),
    c4: hexToRgbA("#7C7C7C"),
    c5: hexToRgbA("#616161"),
  },
  Green: {
    name: "Mr. Frankenstein",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#96C060"),
    t2: hexToRgbA("#B5D889"),
    c1: hexToRgbA("#BDDB99"),
    c2: hexToRgbA("#B5D889"),
    c3: hexToRgbA("#A8D174"),
    c4: hexToRgbA("#96C060"),
    c5: hexToRgbA("#7FAE42"),
  },
  Day: {
    name: "Festive Frolics",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#FBA2DD"),
    t2: hexToRgbA("#FBA2DD"),
    c1: hexToRgbA("#FFD53F"),
    c2: hexToRgbA("#FBA2DD"),
    c3: hexToRgbA("#47C597"),
    c4: hexToRgbA("#FF823B"),
    c5: hexToRgbA("#6473FF"),
  },
  Pastel: {
    name: "Winter Wonderland",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#8590FB"),
    t2: hexToRgbA("#8590FB"),
    c1: hexToRgbA("#F7B9DA"),
    c2: hexToRgbA("#EEA8F7"),
    c3: hexToRgbA("#C49DF7"),
    c4: hexToRgbA("#A385F9"),
    c5: hexToRgbA("#8590FB"),
  },
  Colorful: {
    name: "Colorful",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#D2488B"),
    t2: hexToRgbA("#EAA4C6"),
    c1: hexToRgbA("#F09B32"),
    c2: hexToRgbA("#F55871"),
    c3: hexToRgbA("#068BAE"),
    c4: hexToRgbA("#ED4A17"),
    c5: hexToRgbA("#2E3A7C"),
  },
  Halloween: {
    name: "Halloween",
    bg: hexToRgbA("#000000"),
    t1: hexToRgbA("#D35143"),
    t2: hexToRgbA("#ffffff"),
    c1: hexToRgbA("#EC8622"),
    c2: hexToRgbA("#D35143"),
    c3: hexToRgbA("#A02E50"),
    c4: hexToRgbA("#611F4F"),
    c5: hexToRgbA("#231337"),
  },
  SweetInTheRain: {
    name: "Sweet in the Rain",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#91EDD8"),
    t2: hexToRgbA("#A8E2F7"),
    c1: hexToRgbA("#D8AED4"),
    c2: hexToRgbA("#FEA887"),
    c3: hexToRgbA("#FE929F"),
    c4: hexToRgbA("#7CD0D0"),
    c5: hexToRgbA("#859AD1"),
  },
  NauticalMermaid: {
    name: "Nautical Mermaid",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#5257BD"),
    t2: hexToRgbA("#8E92DE"),
    c1: hexToRgbA("#9BA5FF"),
    c2: hexToRgbA("#F3A3F4"),
    c3: hexToRgbA("#1FBABF"),
    c4: hexToRgbA("#895FD9"),
    c5: hexToRgbA("#28ACF6"),
  },
  NishikigoiWaterGarden: {
    name: "Nishikigoi Garden",
    bg: hexToRgbA("#FFFFFF"),
    t1: hexToRgbA("#0F6D69"),
    t2: hexToRgbA("#26A58D"),
    c1: hexToRgbA("#0B7158"),
    c2: hexToRgbA("#5BC87E"),
    c3: hexToRgbA("#F89B59"),
    c4: hexToRgbA("#F2CB63"),
    c5: hexToRgbA("#2FCCA6"),
  },
  Bloomandbasket: {
    name: "Bloom and Basket",
    bg: hexToRgbA("#FFFFFC"),
    t1: hexToRgbA("#F874AA"),
    t2: hexToRgbA("#FFA5BE"),
    c1: hexToRgbA("#FFD1DF"),
    c2: hexToRgbA("#FFD080"),
    c3: hexToRgbA("#FFF1AC"),
    c4: hexToRgbA("#DAE299"),
    c5: hexToRgbA("#B7EFEE"),
  },
}
