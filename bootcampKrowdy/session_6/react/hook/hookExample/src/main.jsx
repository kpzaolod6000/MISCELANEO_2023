import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UseRef from "./components/UseRef";
import UseRefPattern from "./components/UseRefPattern";
import UseRefExample from "./components/UseRefExample";
import Polymorphism from "./polymorphism/Polymorphism";
import MainLayouts from "./layouts/MainLayouts";
import ShoppingCar from "./container/ShoppingCar";
import ShoppingCarUseContext from "./container/ShoppingCarUseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App /> //ejemplo del useEffect
  // <UseRef/> //uso del useRef
  // <UseRefPattern/> //uso del forwardRef para controlar los metodos del hijo desde el padre
  // <UseRefExample/> // comparacion gorwardRef and innerRef
  <Polymorphism/> // ejemplo de polimorfismo usando dos atm con dferente metodo con UseRef and useImperativeHandle
  
  // <MainLayouts>
  //   <div>Contenido de la Pagina</div> // ejemplo de como establecer un layout
  // </MainLayouts>

  // <>
  //   <ShoppingCar/>
  //   <ShoppingCarUseContext/>
  // </>
);
