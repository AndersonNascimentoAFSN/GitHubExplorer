import PropTypes from "prop-types";
import Button from "../../Button";
import Input from "../../Input";

export default function RepositoryForm(props) {
  return (
    <>
      <Input
        name="name"
        placeholder="Nome"
        handle={props.handleRepositoryName}
      />
      <Input
        name="description"
        placeholder="Descrição"
        handle={props.handleRepositoryDescription}
      />
      <Input
        name="link"
        placeholder="Link"
        handle={props.handleRepositoryLink}
      />
      <Input
        name="action"
        placeholder="Action"
        handle={props.handleRepositoryAction}
      />
      <Button
        type="button"
        name="Adicionar"
        handle={props.handleRepositories}
      />
    </>
  );
}

RepositoryForm.propTypes = {
  props: PropTypes.shape({
    handleRepositoryName: PropTypes.func,
    handleRepositoryDescription: PropTypes.func,
    handleRepositoryLink: PropTypes.func,
    handleRepositoryAction: PropTypes.func,
    handleRepositories: PropTypes.func,
  }),
};
