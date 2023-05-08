import React from "react";

const MainLayouts = (props) => {
  console.log(props);// el contenido entre viene en l variable children del props
  return (
    <div>
      <header>
        <h1>Titulo test</h1>
      </header>
      {props.children}
      <footer>
        <h3>Footer test</h3>
      </footer>
    </div>
  );
};

export default MainLayouts;
