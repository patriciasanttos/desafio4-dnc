import DeleteIcon from "./deleteIcon.svg";

function DeleteButton(props) {
  return (
    <img className="icon" src={DeleteIcon} onClick={props.onClick} alt="" />
  );
}

export default DeleteButton;
