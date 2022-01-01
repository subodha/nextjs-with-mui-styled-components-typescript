import * as React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";

import ProTip from "../src/ProTip";
// import Link from "../src/Link";
import Copyright from "../src/Copyright";

const CustomButton = styled(Button)`
  font-size: 50px;
  background-color: blue !important;
`;

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/">
          Go to the main page erf
        </Link>
        <Button variant="outlined">Outlined</Button>

        <CustomButton variant="contained">Custom button</CustomButton>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
