import { useState, useEffect, useCallback } from "react";
import RepositoryItem from "../RepositoryItem";
import { getRepositoriesByUsername } from "../../../service/api";
import "../../../styles/repositories.scss";

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = useCallback(async () => {
    const repositories = await getRepositoriesByUsername(
      "andersonnascimentoafsn"
    );
    setRepositories(repositories);
  }, []);

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <section className="repository-list">
      <ul>
        {repositories &&
          repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
      </ul>
    </section>
  );
}
