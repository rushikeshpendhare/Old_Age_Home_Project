import { Typography, Container, Paper, List, ListItem, ListItemIcon, ListItemText, Button, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const admissionPoints = [
  "150 residents & 50 patients can be accommodated in Niwara.",
  "Admits individuals aged 60 years and above without close family and financial sources.",
  "Admission after document submission, pathology reports verification, and interview.",
  "First three months stay is a trial period for adjustment.",
  "Residents must abide by rules set by the institution.",
  "Once admitted, all needs are taken care of free of charge.",
];

export default function Admission() {
  const handleClick = () => {
    alert("Welcome to the Niwara Old Age Home Admission Section. Unfortunately, vacancy is full. We will let you know soon.");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 10 }}>
      <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold" color="primary">
        Admission
      </Typography>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f0faf9" }}>
        <List>
          {admissionPoints.map((point, idx) => (
            <ListItem key={idx} sx={{ alignItems: "flex-start" }}>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText primary={point} sx={{ fontSize: 16, mt: "2px" }} />
            </ListItem>
          ))}
        </List>
        <Box textAlign="center" mt={4}>
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Button variant="contained" color="primary" size="large" onClick={handleClick} sx={{ borderRadius: 4, px: 6 }}>
              Admission
            </Button>
          </motion.div>
        </Box>
      </Paper>
    </Container>
  );
}
