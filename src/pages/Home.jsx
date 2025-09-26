import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import photos from "../assets/photos.jpg";
import room from "../assets/room.jpg";
import celebration from "../assets/celebrtion.jpg";

const services = [
  {
    title: "Nursing Care",
    image: photos,
    description:
      "Round-the-clock skilled nursing for elderly residents. Personalized medication management, emotional support, and gentle attention to each individual’s well-being.",
    facts: [
      "Certified in-home caregivers",
      "Personalized medication planning",
      "Emotional engagement & activities",
      "Dedicated night care staff",
    ],
    accent: "#00b894",
  },
  {
    title: "Comfortable Stay",
    image: room,
    description:
      "Safe and cozy A/C and Non-A/C rooms available for singles and couples. Homely environment with large windows, fresh bedding, and comfortable seating.",
    facts: [
      "A/C & Non-A/C options",
      "Single or double sharing",
      "Wheelchair-accessible rooms",
      "Lush gardens & peaceful views",
    ],
    accent: "#0984e3",
  },
  {
    title: "Holistic Facilities",
    image: celebration,
    description:
      "More than just a room! We offer physiotherapy, yoga, nutrition plans, diagnostic clinics, event spaces, and daily recreation for all residents.",
    facts: [
      "Daily physiotherapy classes",
      "Health checkups and diagnostics",
      "Community hall & events",
      "Cultural and festival celebrations",
    ],
    accent: "#6c5ce7",
  },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          letterSpacing: 3,
          color: (theme) => theme.palette.primary.main,
          mb: 6,
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {services.map(({ title, image, description, facts, accent }, idx) => (
          <Grid item xs={12} md={4} key={title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.25, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.025, boxShadow: "0 10px 50px rgba(0,0,0,0.18)" }}
            >
              <Paper sx={{ borderRadius: 6, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(120deg, ${accent}B2 0%, transparent 80%)`,
                      opacity: 0.21,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 24,
                      zIndex: 1,
                      color: "#fff",
                      fontWeight: 700,
                      textShadow: "1px 2px 8px rgba(0,0,0,0.30)",
                      background: `${accent}E6`,
                      px: 2,
                      borderRadius: 2,
                      py: 1,
                      fontSize: 28,
                      letterSpacing: 1,
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
                <Box sx={{ p: 3, pb: 2.5, background: "#f9fafc", flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 600, mb: 1.5, color: accent, fontSize: 16 }}>
                    {description}
                  </Typography>
                  <ul style={{ paddingLeft: 22, marginBottom: 0 }}>
                    {facts.map((fact, i) => (
                      <li key={i} style={{ color: "#636e72", marginBottom: 6, fontSize: 15 }}>{fact}</li>
                    ))}
                  </ul>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
