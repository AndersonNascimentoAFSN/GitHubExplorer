import RepositoryList from "./RepositoryList";
import '../../styles/repositories.scss';

export default function Repository() {
  return (
    <main className="c_repository">
      <h1>Lista de Repositórios</h1>
      <RepositoryList />
    </main>
  );
}
