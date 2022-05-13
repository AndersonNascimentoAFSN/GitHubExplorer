import PropTypes from "prop-types";
export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Não informado"}</strong>
      <p>{repository?.description ?? "Não informado"}</p>
      <a href={repository?.html_url ?? "#"} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
  }),
};
