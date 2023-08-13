import React, { createContext, useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";
import DialogContext from "./context";

const FormTypeMessage = ({ onClose }) => {
  const [typeMessage, setTypeMessage] = useState("");
  const {setView, viewStack, infoConfigBy, informationDefault, result} = useContext(DialogContext);

  const handleRadioChange = (event) => {
    setTypeMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeMessage) {
      // console.log("siguiente");
      setView((prev) => {
        return { ...prev, 
                [viewStack.top()]: false, 
                ["formChannel"]: true };
        });
      viewStack.push("formChannel");

      result["result"]=infoConfigBy[typeMessage];
      
    } else console.log("escoja un tipo");
  };

  const handleClickCancel = () => {
    setView({
      formTypeMessage: false,
      formChannel: false,
      formEmail: false,
      formMessage: false,
      formWhatsapp: false,
    });
    viewStack.pop();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Seleccion de tipo de mensaje
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          value={typeMessage}
          onChange={handleRadioChange}
        >
          {informationDefault.map((info) => {
            return (
              <FormControlLabel
                key={info.id}
                value={info.unique}
                control={<Radio />}
                label={info.title}
              />
            );
          })}
        </RadioGroup>
        <div className="d-flex">
          <Button name="cancel" type="submit" onClick={handleClickCancel}>
            Cancelar
          </Button>
          <Button name="next" type="submit">
            Siguiente
          </Button>
        </div>
      </FormControl>
      <div>{typeMessage}</div>
    </form>
  );
};

export default FormTypeMessage;
