import {ColorType} from "@components/ColorPicker";

export function hexToRgbA(hex: string) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return {r: ((c >> 16) & 255).toString(), g: ((c >> 8) & 255).toString(), b: (c & 255).toString(), a: "1"}
  }
  throw new Error('Bad Hex');
}

export const rawRgbColorToCss = (colorInstance: ColorType) => {
  return `rgba(${colorInstance.r}, ${colorInstance.g}, ${colorInstance.b}, ${colorInstance.a})`
}
