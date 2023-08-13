import { useState } from 'react'
import './App.css'

import {
  Dialog,
} from "@mui/material";
import FormTypeMessage from './components/FormTypeMessage';
import FormChannel from './components/FormChannel';
import FormEmail from './components/FormEmail';
import FormMessage from './components/FormMessage';
import FormWhatsapp from './components/FormWhatsapp';
import DialogContext from './components/context'
import {viewForm, viewQueue, viewStack, infoConfigBy, informationDefault, result} from './components/constant'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(viewForm);

  const handleOpen = () => {
    viewStack.splice(0, viewStack.length); // emptys
    viewQueue.splice(0, viewQueue.length); // emptys
    for (let key in result) {
      delete result[key];
    } //emptys

    // console.log("stack:",viewStack);
    // console.log("queue:",viewQueue);
    
    setIsOpen(true);
    setView({
        formTypeMessage: true,
        formChannel: false,
        formEmail: false,
        formMessage: false,
        formWhatsapp: false,
    })
    viewStack.push("formTypeMessage");
  };

  const handleClose = () => {
    setIsOpen(false);    
  }
  
  return (
    
      <div>
        <button onClick={handleOpen}>Enviar Mensaje a Usuarios</button>
        <Dialog open={isOpen} onClose={handleClose}>
          {/* full condiciones  y estados */}
          <DialogContext.Provider value={{view, setView, viewQueue, viewStack, infoConfigBy, informationDefault, result}}>
          {
            view.formTypeMessage && <FormTypeMessage onClose={handleClose}/>
          }
          {
            view.formChannel && <FormChannel/>
          }
          {
            view.formEmail && <FormEmail/>
          }
          {
            view.formMessage && <FormMessage/>
          }
          {
            view.formWhatsapp && <FormWhatsapp/>
          }
          </DialogContext.Provider>
        </Dialog>
      </div>
  )
}

export default App
