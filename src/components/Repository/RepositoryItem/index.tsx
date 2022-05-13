interface RepositoryItemProps {
  repository: {
    key: number,
    name: string,
    description: string,
    html_url: string
  }
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
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
