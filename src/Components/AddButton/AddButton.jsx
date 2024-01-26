import AddIcon from "./addIcon.svg";

function AddButton(props) {
  return <img className="icon" src={AddIcon} onClick={props.onClick} alt="" />;
}

export default AddButton;
