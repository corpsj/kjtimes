"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
    fontFamily: "var(--font-noto-sans-kr)",
    headings: { fontFamily: "var(--font-noto-sans-kr)" },
    breakpoints: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
    },
});
