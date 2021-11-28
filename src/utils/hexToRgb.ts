import { ColorType } from "@components/ColorPicker";

export function hexToRgbA(hex: string) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return { r: ((c >> 16) & 255).toString(), g: ((c >> 8) & 255).toString(), b: (c & 255).toString(), a: "1" };
  }
  throw new Error("Bad Hex");
}

export function RgbAToHex(orig: string): string {
  let a,
    isPercent,
    rgb = orig.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 0o1;
  }
  // multiply before convert to HEX
  a = ((a * 255) | (1 << 8)).toString(16).slice(1);
  hex = hex + a;

  return `#${hex}`;
}

export const rawRgbColorToCss = (colorInstance: ColorType) => {
  return `rgba(${colorInstance.r}, ${colorInstance.g}, ${colorInstance.b}, ${colorInstance.a})`;
};
