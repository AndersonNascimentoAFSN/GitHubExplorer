import { useState, useEffect, useCallback } from "react";
import RepositoryItem from "../RepositoryItem";
import { GithubApi } from "../../../service/api";
import "../../../styles/repositories.scss";

interface Repository {
  key: number,
  id: number,
  name: string,
  description: string,
  html_url: string
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const fetchRepositories = useCallback(() => {
    GithubApi.getRepositoriesByUsername("andersonnascimentoafsn").then((data) =>
      setRepositories(data)
    );
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
