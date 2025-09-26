import { Box } from "@mui/material";

export default function AppLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8dadc 0%, #f1faee 100%)",
        paddingTop: 3,
        paddingBottom: 6,
        px: { xs: 2, sm: 4, md: 8 },  // responsive horizontal padding
        color: "#264653",
        '& > *': {
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }
      }}
    >
      {children}
    </Box>
  );
}
