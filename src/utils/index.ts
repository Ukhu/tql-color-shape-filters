export const getItemsDescription = (
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
