import Head from "next/head";
import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("/api/names").then((response) => setNames(response.data));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios.post("/api/names", { name }).then(() => {
      setNames([...names, name]);
      setName("");
      setIsLoading(false);
    });
  };

  return (
    <>
      <Head>
        <title>TK Turns 35!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          backgroundImage: "url('/Background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <Container maxW={"container.sm"} py={16}>
          <Flex direction={"column"} align={"center"}>
            <Heading size={"2xl"} color={"primary.500"}>
              TK Turns 35!
            </Heading>
            <Heading>Freestyle Friday</Heading>
            <Heading size={"sm"}>AFTERNOON</Heading>
            <Text>Hotel Suite</Text>
            <Text mb={4}>Check-in at 3PM</Text>
            <Text>NYNY Hotel and Casino</Text>
            <Text mb={4}>3790 S Las Vegas Blvd, Las Vegas, NV 89109</Text>
            <Text mb={4}>Join me for Drinks, Games, and Music.</Text>
            <Heading size={"sm"}>EVENING</Heading>
            <Text>After Dark we’ll explore the Vegas Strip</Text>
            <Text mb={4} textAlign={"center"}>
              Light gambling grab a quick dinner Dress: Comfy
            </Text>
            <Text mb={4}>(Contact me for current location)</Text>
            <Heading>Skyfall Saturday</Heading>
            <Heading size={"sm"}>AFTERNOON</Heading>
            <Text mb={4}>Explore Area 15 with us!</Text>
            <Text>Area 15 is Kid Friendly</Text>
            <Text mb={4} textAlign={"center"}>
              Tickets normally start at $35 (They have been known to have free
              entry)
            </Text>
            <Text>3215 S Rancho Dr,</Text>
            <Text>Las Vegas, NV 89102</Text>
            <Text mb={4}>Saturday afternoon (2PM)</Text>
            <Heading size={"sm"}>EVENING</Heading>
            <Text mb={4}>**Main Event**</Text>
            <Text>Food and Drinks at SkyFall lounge</Text>
            <Text>Located at Delano Hotel</Text>
            <Text>Open bar. Please RSVP</Text>
            <Text mb={4}>21 yrs or older only</Text>
            <Text>3940 S Las Vegas Blvd</Text>
            <Text>Las Vegas, NV 89119</Text>
            <Text>Reservation: 7PM</Text>
            <Text mb={4}>Dress: Casual</Text>
            <Heading>Sober-Up Sunday</Heading>
            <Heading size={"sm"}>AFTERNOON</Heading>
            <Text mb={4}>Brunch at PepperMill</Text>
            <Text>2985 Las Vegas Blvd S</Text>
            <Text mb={4}>Las Vegas, NV 89109</Text>
            <Text>12:00PM</Text>
            <Text>No Reservation</Text>
            <Text>(First come first serve)</Text>
            <Text>Ask for “T.K.” at</Text>
            <Text mb={4}>the hostess stand</Text>
            <Text textAlign={"center"} mb={4}>
              Contact me via Phone, Text, Teams or Facebook Messenger for hotel
              discounts or meeting details
            </Text>
            <Heading>RSVP!</Heading>
            <Text mb={4}>
              {names?.map((name) => (
                <Text key={name.name} as={"span"}>
                  ** {name.name} **&nbsp;&nbsp;
                </Text>
              ))}
            </Text>
          </Flex>
          <form onSubmit={(event) => handleSubmit(event)}>
            <FormControl isRequired>
              <FormLabel>Enter your Name to RSVP</FormLabel>
              <Input
                type={"text"}
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                mb={4}
              />
              <Button
                type={"submit"}
                colorScheme={"primary"}
                isLoading={isLoading}
              >
                Add
              </Button>
            </FormControl>
          </form>
        </Container>
      </main>
    </>
  );
}
