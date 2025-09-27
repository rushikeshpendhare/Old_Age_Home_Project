import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: "#00b894",
        paddingY: 2.5,
        paddingX: { xs: 3, sm: 6, md: 12 },
        color: "white",
        textAlign: "center",
        userSelect: "none",
        boxShadow: "inset 0 1px 4px rgba(255,255,255,0.2)",
        mt: 'auto',
      }}
    >
      <Typography variant="body2" component="p" sx={{ opacity: 0.9 }}>
        &copy; {new Date().getFullYear()} NIVARA Old Age Home. All rights reserved.
      </Typography>
      <Typography variant="body2" component="p" sx={{ mt: 0.5, fontSize: 14 }}>
        Designed with care by{""}
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener"
          sx={{ color: "white", textDecoration: "underline" }}
        >
          Rushikesh Pendhare
        </Link>
      </Typography>
    </Box>
  );
}
