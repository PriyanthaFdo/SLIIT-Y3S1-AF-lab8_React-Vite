import "../assets/styles/customButton.css"

export default function CustomButton(props){
  const text = props.text;
  const type = props.type;
  const size = props.size;
  var btnType;
  var btnSize;

  switch(type){
    case "primary": btnType = "btn btn-primary"; break;
    case "secondary": btnType = "btn btn-secondary"; break;
    case "success": btnType = "btn btn-success"; break;
    case "danger": btnType = "btn btn-danger"; break;
    case "warning": btnType = "btn btn-warning"; break;
    case "info": btnType = "btn btn-info"; break;
    case "light": btnType = "btn btn-light"; break;
    case "dark": btnType = "btn btn-dark"; break;
    default: btnType = ""; break;
  }

  switch (size) {
    case "small": btnSize="btn-sm"; break;
    case "big": btnSize="btn-lg"; break;
    case "wide": btnSize="btn-wd"; break;
    case "extraWide": btnSize="btn-ewd"; break;
    default: btnSize=""; break;
  }

  const styles = btnType +" "+ btnSize;

  return(
    <>
      <button id="myBtn" className={styles}>{text}</button>
    </>
  );
}