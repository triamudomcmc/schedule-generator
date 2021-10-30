import { ColorType } from "@components/ColorPicker";

export const isDarkOrLightHEX = (color: string) => {
  const _color = Array.from(color)
    .filter((e) => e !== "#")
    .join("");

  const colorCode =
    _color.length === 3
      ? _color
          .split("")
          .map((e) => e + e)
          .join("")
      : _color;

  // @ts-ignore
  const [a, b, c] = colorCode.matchAll(/[0-9a-fA-F]{2}/gi);

  if (0.299 * parseInt(a, 16) + 0.587 * parseInt(b, 16) + 0.114 * parseInt(c, 16) > 196) {
    return "light"; // light
  } else {
    return "dark"; // dark
  }
};

export const isDarkOrLightRGBA = (color: ColorType) => {
  const { r, g, b } = color;
  if (0.299 * parseInt(r, 16) + 0.587 * parseInt(g, 16) + 0.114 * parseInt(b, 16) > 196) {
    return "light"; // light
  } else {
    return "dark"; // dark
  }
};
