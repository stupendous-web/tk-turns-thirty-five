import Head from "next/head";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>TK Turns 35!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Container maxW={"container.sm"} py={16}>
          <Heading size={"2xl"} color={"primary.500"} textAlign={"center"}>
            TK Turns 35!
          </Heading>
          <Box>
            <Heading>Freestyle Friday</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at
              cupiditate eum, eveniet incidunt laudantium non numquam omnis
              possimus qui quia quod reiciendis rem, saepe sapiente velit,
              voluptatibus voluptatum? Soluta.
            </Text>
          </Box>
          <Box>
            <Heading>Skyfall Saturday</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at
              cupiditate eum, eveniet incidunt laudantium non numquam omnis
              possimus qui quia quod reiciendis rem, saepe sapiente velit,
              voluptatibus voluptatum? Soluta.
            </Text>
          </Box>
          <Box>
            <Heading>Sober-Up Sunday</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at
              cupiditate eum, eveniet incidunt laudantium non numquam omnis
              possimus qui quia quod reiciendis rem, saepe sapiente velit,
              voluptatibus voluptatum? Soluta.
            </Text>
          </Box>
          <Box>
            <Heading>RSVP!</Heading>
            <FormControl>
              <FormLabel>Enter your Name to RSVP</FormLabel>
              <Input type="email" />
            </FormControl>
          </Box>
        </Container>
      </main>
    </>
  );
}
