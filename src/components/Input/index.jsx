import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <input
      id={props?.id}
      name={props.name}
      onChange={(event) => props.handle(event.target.value)}
      placeholder={props?.placeholder}
    />
  );
}

Input.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    handle: PropTypes.func,
    placeholder: PropTypes.string,
  }),
};
