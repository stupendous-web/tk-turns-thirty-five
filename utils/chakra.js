import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      900: "#071908",
      800: "#022d0d",
      700: "#044317",
      600: "#0e6027",
      500: "#198038",
      400: "#24a148",
      300: "#42be65",
      200: "#6fdc8c",
      100: "#a7f0ba",
      50: "#defbe6",
    },
    gray: {
      50: "#f4f4f4",
      100: "#e0e0e0",
      200: "#c6c6c6",
      300: "#a8a8a8",
      400: "#8d8d8d",
      500: "#6f6f6f",
      600: "#525252",
      700: "#393939",
      800: "#262626",
      900: "#161616",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "gray.200",
        overflowX: "hidden",
        lineHeight: 2,
      },
    },
  },
  fonts: {
    heading: "transducer, sans-serif",
    body: "transducer, sans-serif",
  },
  radii: {
    none: 0,
    sm: 0,
    base: 0,
    md: 0,
    lg: 0,
    xl: 0,
    "2xl": 0,
    "3xl": 0,
    full: 0,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "white",
        fontWeight: "bold",
        mb: 8,
      },
    },
    Link: {
      baseStyle: {
        color: "primary.500",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
