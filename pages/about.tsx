import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
// import styled from "styled-components";

const CustomButton = styled(Button)`
  font-size: 50px;
  background-color: red !important;
`;

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page erf
        </Button>
        <Button variant="outlined">Outlined</Button>

        <CustomButton variant="contained">Custom button</CustomButton>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
