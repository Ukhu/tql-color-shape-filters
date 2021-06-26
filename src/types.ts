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

export interface IItemProps {
  shape: string;
  color: string;
}
