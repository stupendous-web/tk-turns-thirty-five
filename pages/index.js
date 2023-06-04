import Head from "next/head";
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>TK Turns 35!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Container maxW={"container.sm"} pt={16}>
          <Heading color={"primary.500"} textAlign={"center"}>
            TK Turns 35!
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at
              cupiditate eum, eveniet incidunt laudantium non numquam omnis
              possimus qui quia quod reiciendis rem, saepe sapiente velit,
              voluptatibus voluptatum? Soluta.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at
              cupiditate eum, eveniet incidunt laudantium non numquam omnis
              possimus qui quia quod reiciendis rem, saepe sapiente velit,
              voluptatibus voluptatum? Soluta.
            </Box>
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
}
