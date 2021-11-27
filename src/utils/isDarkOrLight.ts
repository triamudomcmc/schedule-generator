import { ColorType } from "@components/ColorPicker";

function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export const isDarkOrLightHEX = (color: string): "dark" | "light" => {
  const rgb = hexToRgb(color);

  if (rgb !== null) {
    const { r, g, b } = rgb;

    if (
      0.299 * parseInt(r.toString(), 16) + 0.587 * parseInt(g.toString(), 16) + 0.114 * parseInt(b.toString(), 16) >
      196
    ) {
      return "light"; // light
    } else {
      return "dark"; // dark
    }
  } else {
    return "dark";
  }
};

export const isDarkOrLightRGBAString = (color: string): "dark" | "light" => {
  const st = color.replace("rgba(", "").replace(")", "").split(", ");
  const [r, g, b] = st;

  if (0.299 * parseInt(r, 16) + 0.587 * parseInt(g, 16) + 0.114 * parseInt(b, 16) > 196) {
    return "light"; // light
  } else {
    return "dark"; // dark
  }
};

export const isDarkOrLightRGBAStringD = (color: string): "dark" | "light" => {
  const st = color.replace("rgba(", "").replace(")", "").split(", ");
  const [r, g, b] = st;

  if (0.299 * parseInt(r, 16) + 0.587 * parseInt(g, 16) + 0.114 * parseInt(b, 16) > 500) {
    return "light"; // light
  } else {
    return "dark"; // dark
  }
};

export const isDarkOrLightRGBA = (color: ColorType): "dark" | "light" => {
  const { r, g, b } = color;
  if (0.299 * parseInt(r, 16) + 0.587 * parseInt(g, 16) + 0.114 * parseInt(b, 16) > 196) {
    return "light"; // light
  } else {
    return "dark"; // dark
  }
};
