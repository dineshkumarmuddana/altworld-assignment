import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { extendTheme } from "@chakra-ui/react"
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    colors: {
        brand: {
            100: "#FF3c00",
        },
        fonts: {
            body: "Open Sans, sans-serif",
        }
    },
    styles: {
        global: () => ({
            body: {
                bg: "red",
            },
        })
    },
    components: {
        Button,
    }
});