import { IItem } from "../types";

export const getColorFilters = (items: IItem[]) => {
  const availableColors: { [key: string]: boolean } = {};
  const filters = [];

  for (let item of items) {
    if (availableColors[item.color]) {
      continue;
    } else {
      availableColors[item.color] = true;
      filters.push(item.color);
    }
  }

  return filters;
};

export const getShapeFilters = (items: IItem[]) => {
  const availableShapes: { [key: string]: boolean } = {};
  const filters = [];

  for (let item of items) {
    if (availableShapes[item.shape]) {
      continue;
    } else {
      availableShapes[item.shape] = true;
      filters.push(item.shape);
    }
  }

  return filters;
};

export const getGridTitle = (
  colorsLength: number,
  shapesLength: number,
  selectedColors: string[],
  selectedShapes: string[]
) => {
  const selectedColorsLength = selectedColors.length;
  const selectedShapesLength = selectedShapes.length;

  let prefix = "";
  let mainItem = "";
  let suffix = "items";

  if (selectedColorsLength === 1) {
    const color = selectedColors[0];
    prefix = color.charAt(0).toUpperCase() + color.slice(1);

    if (selectedShapesLength === 1) {
      mainItem = selectedShapes[0];
      suffix = "item";
    } else if (selectedShapesLength === shapesLength) {
      prefix = "All";
      mainItem = color;
    } else if (selectedShapesLength > 1) {
      prefix = "Multiple";
      mainItem = color;
    }
  } else if (selectedColorsLength === colorsLength) {
    prefix = "All";

    if (selectedShapesLength === 1) {
      mainItem = selectedShapes[0];
    } else if (selectedShapesLength === shapesLength) {
      prefix = "All";
    } else if (selectedShapesLength > 1) {
      prefix = "Multiple";
    }
  } else {
    prefix = "Multiple";

    if (selectedShapesLength === 1) {
      mainItem = selectedShapes[0];
    } else if (selectedShapesLength === shapesLength) {
      prefix = "Multiple";
    } else if (selectedShapesLength > 1) {
      prefix = "Multiple";
    }
  }

  return `${prefix} ${mainItem} ${suffix}`;
};
