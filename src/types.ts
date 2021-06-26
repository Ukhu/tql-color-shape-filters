export interface IShapeProps {
  name: string;
  handleClick: () => void;
  selected?: boolean;
}

export interface IColorProps {
  name: string;
  handleClick: () => void;
  selected?: boolean;
}

export interface Item {
  shape: string;
  color: string;
}

export interface IItemProps extends Item {}
