import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogContext from './context'
import { useContext, useState } from "react";

const channelsDefault =[
  {
    id:1,
    title: "Correo Electronico",
    view: "formEmail",
    checked: false
  },
  {
    id:2,
    title: "Mensaje de Texto",
    view: "formMessage",
    checked: false
  },
  {
    id:3,
    title: "Whatsapp",
    view: "formWhatsapp",
    checked: false
  }
]

const FormChannel = () => {

  const {setView, viewStack, viewQueue, result} = useContext(DialogContext);
  const [channels, setChannels] = useState(result["result"]?.channels);

  const handleChangePattern = (event) => {
    setChannels((prev) => {
      return prev.map((chan) => {
        chan.selected = event.target.checked;
        return chan;
      })
    })
  }
  
  const handleChange = (channel) => (event) => {
    setChannels((prev) => {
      return prev.map((chan) => {
        if (chan.id == channel.id) chan.selected = event.target.checked;
        return chan;
      })
    })
  }

  const handleClickNext = (event) => {
    event.preventDefault();
    const isChecked = (channel) => channel.selected == false;

    if (!channels.every(isChecked)) {
      viewQueue.splice(0, viewQueue.length);
      channels.forEach((channel) => {
        if(channel.selected) viewQueue.push(channel.view);
      });

      let viewDelete = viewQueue.shift(); 

      setView((prev) => {
        return {
          ...prev,
          [viewStack.top()]: false,
          [viewDelete]: true
        }
      });

      viewStack.push(viewDelete);

    }else{
      console.log("Seleccione por lo menos una opcion");
    }
    
  }

  const handleClickBack = (event) => {
    event.preventDefault();
    setView((prev)=>{
      return {
        ...prev,
        [viewStack.pop()]: false,
        [viewStack.top()]: true
      }
    })
  }
  
  return (
    <div>
      <form>
        <FormControlLabel
          label="Seleccion de Canales"
          control={
            <Checkbox
              checked={channels[0].checked && channels[1].checked && channels[2].checked}
              indeterminate={channels[0].checked !== channels[1].checked !== channels[2].checked}
              onChange={handleChangePattern}
            />
          }
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          {
            channels.map((channel) => {
              return (
                <FormControlLabel
                  key={channel.id}
                  label={channel.title}
                  control={<Checkbox checked={channel.selected} onChange={handleChange(channel)} />}
                />
              );
            })
          }
        </Box>
        <Button variant="contained" type="submit" onClick={handleClickBack}>Atras</Button>
        <Button variant="contained" type="submit" onClick={handleClickNext}>Siguiente</Button>

        {/* {JSON.stringify(channels,null,2)} */}
      </form>
    </div>
  );
};

export default FormChannel;
