import React, { MutableRefObject, useRef } from "react";
import { ImPlay3 } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  Box,
  IconButton,
  Icon
} from "@chakra-ui/react";

const DetailVideo = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const videoGum = useRef();
  // const ButtonPlay = useRef();

  function getSupportedMimeTypes() {
    const possibleTypes = [
      'video/webm;codecs=av1,opus',
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=h264,opus',
      'video/mp4;codecs=h264,aac',
    ];
    return possibleTypes.filter(mimeType => {
      return MediaRecorder.isTypeSupported(mimeType);
    });
  }
  const handleSuccess = (stream: MediaStream) => {
    // recordButton.disabled = false;
    console.log('getUserMedia() got stream:', stream);
    window.stream = stream;

    // const gumVideo = videoGum.current;
    // gumVideo.srcObject = stream;

    const gumVideo = document.querySelector('video#gum');
    gumVideo.srcObject = stream;

    // getSupportedMimeTypes().forEach(mimeType => {
    //   const option = document.createElement('option');
    //   option.value = mimeType;
    //   option.innerText = option.value;
    //   codecPreferences.appendChild(option);
    // });
    // codecPreferences.disabled = false;
  }
  
  const init = async (constraints: MediaStreamConstraints) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
      // errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  
  }
  const handleClickPlay = async () => {
    
    // document.querySelector('button#start').disabled = true;
    // const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
    const constraints: MediaStreamConstraints = {
      audio: {
        echoCancellation: {exact: true}
      },
      video: {
        width: 1280, height: 720
      }
    };
    console.log('Using media constraints:', constraints);
    await init(constraints);
  }
  
  // console.log(params);
  // console.log(videoGum.current);

  return (
    <Card align="center">
        <CardHeader>
          <Heading size="md"> Grabación de Video</Heading>
        </CardHeader>
        <CardBody>
          <video id="gum" playsinline autoplay muted></video>
          <video id="recorded" playsinline loop></video>

          
          <Box position="relative" bottom={0} left={0} p={4} onClick = {handleClickPlay}>
            <IconButton
              size="xl"
              variant="link"
              colorScheme="telegram"
              aria-label="WhatsApp icon"
              icon={<Icon as={ImPlay3} />}
            />
          </Box>
        </CardBody>
        {/* <CardFooter>
          <Button colorScheme="blue">Button</Button>
        </CardFooter> */}
      </Card>
  );
};

export default DetailVideo;
