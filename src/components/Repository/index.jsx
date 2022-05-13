import { useState } from "react";
import RepositoryList from "./RepositoryList";
import RepositoryForm from "./RepositoryForm";

const repositories = [
  {
    id: 0,
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
    action: "Acessar repositório",
  },
];

export default function Repository() {
  const [repositoriesList, setRepositoriesList] = useState(repositories);
  const [repositoryName, setRepositoryName] = useState("");
  const [repositoryDescription, setRepositoryDescription] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");
  const [repositoryAction, setRepositoryAction] = useState("");

  const handleAddRepositories = () => {
    setRepositoriesList((prevState) => [
      {
        id: prevState[prevState.length - 1].id + 1,
        name: repositoryName,
        description: repositoryDescription,
        action: repositoryAction,
        link: repositoryLink,
      },
      ...prevState,
    ]);
  };

  return (
    <>
      <h1>Lista de Repositórios</h1>
      <RepositoryList repositories={repositoriesList} />
      <RepositoryForm
        handleRepositoryName={setRepositoryName}
        handleRepositoryDescription={setRepositoryDescription}
        handleRepositoryLink={setRepositoryLink}
        handleRepositoryAction={setRepositoryAction}
        handleRepositories={handleAddRepositories}
      />
    </>
  );
}
