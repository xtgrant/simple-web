
const Button = (props = {}) => {
  const onButtonClick = () => {
    if(props.callback){
      props.callback();
    }else {
      alert("Else alert");
    }
  };
  const text = props.text || "CLICK ME";

  const element = document.createElement("button");
  element.className = "cta-button";
  element.innerHTML = text;
  element.addEventListener("click", onButtonClick, false);
  return element;
}
export default Button;
