import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";

const aboutSections = [
  {
    title: "Who We Are",
    content:
      "NIVARA is a self sustained trust supported by society, committed to the wellbeing of all its residents. Generous people from all walks of life come forward to donate in kind and money, which we gratefully accept. We look after our residents in every respect throughout their lives.",
  },
  {
    title: "Our Mission",
    content:
      "NIVARA aims to serve the elderly destitute by providing free and compassionate care. Once admitted, all services are free of charge, and we ensure a dignified and comfortable life for our residents.",
  },
  {
    title: "Our Services and Commitment",
    points: [
      {
        icon: "🏥",
        title: "Quality Healthcare",
        desc: "Comprehensive nursing and health services tailored to each resident.",
      },
      {
        icon: "🏠",
        title: "Safe Accommodations",
        desc: "Comfortable and secure rooms with essential amenities and personalization options.",
      },
      {
        icon: "🎉",
        title: "Recreational Activities",
        desc: "Diverse social engagement programs to promote wellbeing and joy.",
      },
      {
        icon: "🤝",
        title: "Community Support",
        desc: "Emotional support and a sense of belonging for every resident.",
      },
    ],
  },
  {
    title: "Community Feedback",
    content:
      "Recent surveys show 80% of residents feel safe and cared for, 70% desire more recreational activities, and 50% want more frequent visits from family. We constantly strive to improve based on this feedback.",
  },
];

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        color="primary"
        fontWeight="bold"
        sx={{ mb: 5 }}
      >
        About NIVARA
      </Typography>
      {aboutSections.map(({ title, content, points }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.3, duration: 0.7 }}
          whileHover={{ scale: points ? 1.02 : 1 }}
          style={{ marginBottom: 40 }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "#f7f9fc",
              borderLeft: points ? "6px solid #00b894" : "none",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 20px 38px rgba(0, 184, 148, 0.25)",
              },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={700}
              sx={{ mb: 2, letterSpacing: 1.2 }}
            >
              {title}
            </Typography>
            {content && (
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: 16, lineHeight: 1.7 }}
              >
                {content}
              </Typography>
            )}
            {points && (
              <Grid container spacing={3} sx={{ mt: 1 }}>
                {points.map(({ icon, title, desc }) => (
                  <Grid item xs={12} sm={6} key={title}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        "&:hover": {
                          color: "#00b894",
                          cursor: "pointer",
                          transform: "scale(1.05)",
                          transition: "transform 0.3s",
                        },
                      }}
                    >
                      <Box sx={{ fontSize: 36, lineHeight: 1 }}>{icon}</Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </motion.div>
      ))}
    </Container>
  );
}
