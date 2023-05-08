import React, { forwardRef, useImperativeHandle, useState } from "react";


const Atm = forwardRef(({ hasCustomDisplay = false }, ref) => {
    const [showMoney, setshowMoney] = useState(false);
    const [money, setMoney] = useState(0);

    const handleClickIncre = () => setMoney((prev) => prev +=1);
    const handleClickDecre = () => setMoney((prev) => prev -=1);

    const handleToggle = () => setshowMoney((prev) => !prev);

    useImperativeHandle(ref, ()=>({
        showMoney: () => {
            setshowMoney(true);
        },
        hiddenMoney: () => {
            setshowMoney(false);
        }
    }))

    return (
        <div>
        <button onClick={handleClickDecre}>Decrementar</button>
        <button onClick={handleClickIncre}>Incrementar</button>
        
        {
            showMoney && <div>cantida de dinero: {money}</div>
        }
        <br/>
        {!hasCustomDisplay && (
            <button onClick={handleToggle}>toggleMoney</button>
        )}
        </div>
    );
}
) 
export default Atm;