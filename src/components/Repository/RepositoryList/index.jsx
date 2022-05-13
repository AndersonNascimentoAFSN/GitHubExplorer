import PropTypes from "prop-types";
import RepositoryItem from "../RepositoryItem";

export default function RepositoryList(props) {
  return (
    <section className="repository-list">
      <ul>
        {props.repositories &&
          props.repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
      </ul>
    </section>
  );
}

RepositoryList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      linkName: PropTypes.string,
    })
  ),
};
