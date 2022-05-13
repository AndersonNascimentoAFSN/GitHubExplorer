import PropTypes from "prop-types";

export default function Button(props) {
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
