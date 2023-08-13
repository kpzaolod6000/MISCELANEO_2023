import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DialogContext from "./context";

const FormEmail = () => {
  const { setView, viewStack, viewQueue, result } = useContext(DialogContext);
  
  const [data, setData] = useState(() => {
    return result["result"]?.channels.find((channel) =>{
      if (channel.view === viewStack.top()) return channel;
    })
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickNext = (event) => {
    event.preventDefault();
    if (viewQueue) {
      let viewDelete = viewQueue.shift();

      setView((prev) => {
        return {
          ...prev,
          [viewStack.top()]: false,
          [viewDelete]: true,
        };
      });
      
      result["result"]?.channels.forEach(element => {
        if (element.view == viewStack.top()) {
          element.subject = data.subject;
          element.message = data.message;
        }
      });

      viewStack.push(viewDelete);
    }
  };

  // console.log(viewStack);
  // console.log(viewQueue);
  const handleClickBack = (event) => {
    event.preventDefault();

    const viewDeleted = viewStack.pop()
    viewQueue.unshift(viewDeleted);

    setView((prev) => {
      return {
        ...prev,
        [viewDeleted]: false,
        [viewStack.top()]: true,
      };
    });
  };

  const handleClickSend = (event) => {
    event.preventDefault();
    
    result["result"]?.channels.forEach(element => {
      if (element.view == viewStack.top()) {
        element.subject = data.subject;
        element.message = data.message;
      }
    });

    const filteredResult = {
      ...result["result"],
      channels:result["result"]?.channels.filter(channel => channel.selected)
    }
    console.log(filteredResult);
  };

  return (
    <Card>
      <CardHeader
        title="Correo Electronico"
        // subheader="September 14, 2016"
      />
      <CardContent>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          padding={1.5}
          sx={{
            width: 300,
            height: 300,
            // backgroundColor: "primary.dark",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Asunto"
            variant="outlined"
            value={data.subject}
            name="subject"
            onChange={handleChange}
            sx={{
              marginBottom: 2,
            }}
          />
          <TextField
            type="text"
            minRows={50}
            label="Mensaje"
            variant="outlined"
            value={data.message}
            name="message"
            onChange={handleChange}
            sx={{
              marginBottom: 2,
            }}
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              type="submit"
              variant="text"
              color="primary"
              onClick={handleClickBack}
            >
              Atras
            </Button>
            {viewQueue.length !== 0 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleClickNext}
              >
                Siguiente
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleClickSend}
              >
                Enviar
              </Button>
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FormEmail;
