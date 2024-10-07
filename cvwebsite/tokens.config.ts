
import { defineTheme } from "pinceau";

export default defineTheme({
    typography: {
        readableLine: "150ch",
        body: {
            backgroundColor: {
                initial: '{color.gray.800}',
                dark: '#11111b'
            },
            color: {
                initial: '{color.gray.100}',
                dark: '{color.gray.400}'
            }
        }
    },
});
