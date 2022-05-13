import PropTypes from "prop-types";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { 
  name: string,
  handle: () => void,
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      disabled={props.disabled ? props.disabled : false}
      onClick={props.handle}
    >
      {props.name}
    </button>
  );
}

Button.propTypes = {
  props: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    handle: PropTypes.func,
  }),
};
