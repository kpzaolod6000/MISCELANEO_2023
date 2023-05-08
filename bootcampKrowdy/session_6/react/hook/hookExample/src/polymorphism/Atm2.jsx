import React, { forwardRef, useImperativeHandle } from "react";

const Atm2 = forwardRef(({}, ref) => {
  useImperativeHandle(ref, () => ({
    showMoney: () => {
      console.log("Estoy mostrando dinero");
    },

    hiddenMoney: () => {
      console.log("Estoy ocultando dinero");
    }

  }))
  
  return <div><h1>Atm2</h1></div>;
});

export default Atm2;
