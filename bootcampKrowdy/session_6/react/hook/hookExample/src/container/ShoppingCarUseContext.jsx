import { createContext, memo, useCallback, useContext, useState } from "react";

const shoppingCarContext = createContext();

const SubItem = () => {
  const {message} = useContext(shoppingCarContext);
  return <div>Item: {message}</div>;
};

const Item = () => {
  const {onClick} = useContext(shoppingCarContext);
  return (
    <>
      <button onClick={onClick}>Click</button>
      <SubItem />
    </>
  );
};

const Cart = memo(() => {
  console.log("cart");
  return (
    <div>
      <Item />
    </div>
  );
});

const ShoppingCarUseContext = () => {
  const [message, setMessage] = useState("");

  const handleClick = useCallback(() => {
    setMessage("Estado desde el padre");
  }, []);

  return (
    <shoppingCarContext.Provider value={{ message, onClick: handleClick }}>{/* // todos los componentes hijos tiene acceso al valor message mediante el hook useContext */}
      <div>
        {/* <button onClick={handleClick}>Click</button> */}
        <Cart />
      </div>
    </shoppingCarContext.Provider>
  );
};

export default ShoppingCarUseContext;
