import React, { forwardRef } from "react";
import { useRef } from "react";

const Button = ({ onClick , innerRef}) => {
  //const Button = ({ onClick , ...props})
  //console.log(props); ///vacio cuando el ref se pasa por props, para enviar un ref sedebe innerRef o usa forwardRef
  return <button onClick={onClick} ref={innerRef}>click! innerRef</button>;
};

const Button2 = forwardRef(({ onClick }, ref) => {
  //el forwardRef recibe como primer parametor los props y como segundo el ref
  return <button onClick={onClick} ref={ref}>click! ForwardRef</button>;
});

function UseRefExample() {
  const buttonRef = useRef();
  const buttonForwardRef = useRef();

  const handleClickInnerRef = () => {
    console.log("clickInnerRef");
  }

  const handleClickForwardRef = () => {
    console.log("clickForwardRef");
  }


  const handleClickController = () => {
    if (buttonRef.current) buttonRef.current.click();
    if (buttonRef.current) buttonForwardRef.current.click();
  }

  return <div>
    <Button onClick = {handleClickInnerRef} innerRef = {buttonRef}/>
    <Button2 onClick = {handleClickForwardRef} ref = {buttonForwardRef}/>
    <button onClick={handleClickController}>boton controlador</button>

  </div>;
}

export default UseRefExample;
