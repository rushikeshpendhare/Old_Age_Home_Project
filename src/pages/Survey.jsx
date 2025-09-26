import { useEffect, useState } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { label: "Residents feel safe and cared for.", target: 81, color: "#00b894" },
  { label: "Seek more recreational activities.", target: 69, color: "#0984e3" },
  { label: "Desire more frequent visits from family members.", target: 57, color: "#6c5ce7" },
];

export default function Survey() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = [];

    stats.forEach(({ target }, idx) => {
      let count = 0;
      intervals[idx] = setInterval(() => {
        count++;
        if (count <= target) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[idx] = count;
            return newCounts;
          });
        } else {
          clearInterval(intervals[idx]);
        }
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Key Findings about Residents
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 3, flexWrap: "wrap", marginTop: 4 }}>
        {stats.map(({ label, color }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: `0 8px 32px ${color}80` }}
            style={{ flex: "1 1 220px" }}
          >
            <Paper
              elevation={3}
              sx={{
                backgroundColor: color,
                color: "#fff",
                padding: 4,
                borderRadius: 4,
                minHeight: 140,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
                {counts[idx]}%
              </Typography>
              <Typography variant="subtitle1">{label}</Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>

      <Typography variant="body1" sx={{ mt: 6, fontStyle: "italic", color: "text.secondary" }}>
        Based on feedback, NIVARA continuously enhances activity programs, increases family engagement opportunities,
        and updates facilities to meet evolving needs, ensuring residents enjoy a fulfilling life.
      </Typography>
    </Container>
  );
}
