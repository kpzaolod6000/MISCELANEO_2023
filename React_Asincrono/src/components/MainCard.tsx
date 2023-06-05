import React from "react";
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
  Button,
} from "@chakra-ui/react";
import CardVideo from "../assets/constant/CardVideo";
import Video from "./Video";

const MainCard = () => {
  return (
    <div>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Video Cuestionario</Heading>
        </CardHeader>
        <CardBody>
          <Box
            bg="gray.50"
            p={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {CardVideo.map((video) => {
              return <Video key={video.id} video={video} />;
            })}
          </Box>
        </CardBody>
        {/* <CardFooter>
          <Button colorScheme="blue">Button</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default MainCard;
