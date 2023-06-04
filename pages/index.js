import Head from "next/head";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Home() {
  const handleSubmit = () => {};
  return (
    <>
      <Head>
        <title>TK Turns 35!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Container maxW={"container.sm"} py={16}>
          <Flex direction={"column"} align={"center"}>
            <Heading size={"2xl"} color={"primary.500"}>
              TK Turns 35!
            </Heading>
            <Heading>Freestyle Friday</Heading>
            <Heading size={"sm"}>AFTERNOON</Heading>
            <Text>Hotel Suite</Text>
            <Text mb={4}>Check-in at 3PM NYNY Hotel and Casino</Text>
            <Text>3790 S Las Vegas Blvd, Las Vegas, NV 89109</Text>
            <Text mb={8}>Join me for Drinks, Games, and Music.</Text>
            <Heading size={"sm"}>EVENING</Heading>
            <Text>After Dark we’ll explore the Vegas Strip</Text>
            <Text mb={4}>Light gambling grab a quick dinner Dress: Comfy</Text>
            <Text mb={8}>(Contact me for current location)</Text>
            <Heading>Skyfall Saturday</Heading>
            <Heading size={"sm"}>AFTERNOON</Heading>
            <Text mb={8}>Explore Area 15 with us!</Text>
            <Text>Area 15 is Kid Friendly</Text>
            <Text>
              Tickets normally start at $35 (They have been known to have free
              entry)
            </Text>
            <Text>3215 S Rancho Dr,</Text>
            <Text>Las Vegas, NV 89102</Text>
            <Text mb={8}>Saturday afternoon (2PM)</Text>
            <Heading size={"sm"}>EVENING</Heading>
            <Text>**Main Event**</Text>
            <Text>
              Food and Drinks at SkyFall lounge Located at Delano Hotel Open
              bar. Please RSVP 21 yrs or older only 3940 S Las Vegas Blvd, Las
              Vegas, NV 89119 Reservation: 7PM Dress: Casual
            </Text>
            <Heading>Sober-Up Sunday</Heading>
            <Heading>RSVP!</Heading>
          </Flex>
          <FormControl>
            <FormLabel>Enter your Name to RSVP</FormLabel>
            <Input type="email" />
          </FormControl>
        </Container>
      </main>
    </>
  );
}
