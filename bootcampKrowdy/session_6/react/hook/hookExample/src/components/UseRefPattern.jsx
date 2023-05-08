import React from 'react'
import { useRef } from 'react'
import Atm from './Atm'

function UseRefPattern() {
  const atmRef = useRef();

  const handleShowMoney = () => {
    atmRef.current.showMoney();
  }

  const handleHiddenMoney = () => {
    atmRef.current.hiddenMoney();
  }

  return (
    <div className='container'>
      <Atm hasCustomDisplay={true} ref={atmRef}/>

      <button onClick={handleShowMoney} style={{background:"red"}}>
        Mostrar boton
      </button>
      <button onClick={handleHiddenMoney} style={{background:"blue"}}>
        Ocultar boton
      </button>
    </div>
  )
}

export default UseRefPattern