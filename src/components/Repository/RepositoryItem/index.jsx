import PropTypes from "prop-types";
export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Não disponível"}</strong>
      <p>{repository?.description ?? "Não disponível"}</p>
      <a href={repository?.link ?? "#"} target="_blank">
        {repository?.action ?? "Não disponível"}
      </a>
    </li>
  );
}

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    linkName: PropTypes.string,
  }),
};
