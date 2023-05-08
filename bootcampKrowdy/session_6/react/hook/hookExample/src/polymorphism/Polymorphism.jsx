import React, { forwardRef, useState } from "react";
import { useRef } from "react";
import Atm from "./Atm";
import Atm2 from "./Atm2";

const Button = ({ onClick , innerRef}) => {
  return <button onClick={onClick} ref={innerRef}>click! innerRef</button>;
};

const Polymorphism = () => {
    const [firstAtm, setFirstAtm] = useState(true);
    const atmRef = useRef();
    
    const handleShowMoney = () => {
      atmRef.current.showMoney();
    }

    const handleHiddenMoney = () => {
      atmRef.current.hiddenMoney();
    }

    const handleToggleAtm = () => {
      setFirstAtm((prev) => !prev);
    }
 
    return <div>
      <button onClick={handleToggleAtm}>
        change atm
      </button>

      {
        (firstAtm) ? (
        <Atm hasCustomDisplay={true} ref={atmRef}/>
        ) :
        (<Atm2 ref={atmRef}/>)
      }

      <button onClick={handleShowMoney} style={{background:"red"}}>
        Mostrar boton
      </button>
      <button onClick={handleHiddenMoney} style={{background:"blue"}}>
        Ocultar boton
      </button>
    </div>;
}

export default Polymorphism