import { useRef, useState } from "react";

const UseRef = () => {

    const [counter, setCounter] = useState(0);

    const buttonRef = useRef();
    const value = useRef(10);

    const handleClick = () => {
        console.log("hihi");
        value.current += 10;
        // setCounter((prev) => prev + 1);
        if (value.current % 50 === 0) setCounter(value.current); // parece que el useRef cmabia cuando el estado se modifica
    }

    const handleClickForces = () => {
        const button = buttonRef.current;
        
        if (button) button.click();    
    }
    
    return (
        <div>
            <button ref={buttonRef} onClick={handleClick}>
                click
            </button>

            <button onClick={handleClickForces}>
                clickForces
            </button>
            <br />
            <div>
                <h1>{value.current}</h1>
                <br />
                <h1>{counter}</h1>
            </div>
        </div>
    );
}

export default UseRef;
