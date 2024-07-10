import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

export default function AppContainer({ children }: { children: ReactNode }) {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width="60vh">{children}</Box>
    </Container>
  );
}
