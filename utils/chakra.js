import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#fff0f7",
      100: "#ffd6e8",
      200: "#ffafd2",
      300: "#ff7eb6",
      400: "#ee5396",
      500: "#d02670",
      600: "#9f1853",
      700: "#740937",
      800: "#510224",
      900: "#2a0a18",
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
    Text: {
      baseStyle: {
        mb: 4,
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
