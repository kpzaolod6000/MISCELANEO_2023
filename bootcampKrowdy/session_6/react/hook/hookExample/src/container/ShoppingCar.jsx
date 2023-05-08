import { useState } from "react";

const SubItem = ({ message }) => {
  return <div>Item: {message}</div>;
};

const Item = ({ message, onClick }) => {
  return (
    <>
      <button onClick={onClick}>Click</button>
      <SubItem message={message} />
    </>
  );
};

const Cart = ({ message, onClick}) => {
  return (
    <div>
      <Item message={message} onClick={onClick}/>
    </div>
  );
};

const ShoppingCar = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("holaaas");
  };

  return (
    <div>
      {/* <button onClick={handleClick}>Click</button> */}
      <Cart message={message} onClick={handleClick}/>
    </div>
  );
};

export default ShoppingCar;
