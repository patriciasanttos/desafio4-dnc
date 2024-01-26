import EditIcon from "./editIcon.svg";

function EditButton(props) {
  return <img className="icon" src={EditIcon} onClick={props.onClick} alt="" />;
}

export default EditButton;
