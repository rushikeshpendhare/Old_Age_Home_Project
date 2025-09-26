import { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import chatting from "../assets/chatting.jpg";
import diningArea from "../assets/diningArea.jpeg";
import gameandactivity from "../assets/gameandactivity.avif";
import medicalHealth from "../assets/medicalHealth.jpeg";
import img7 from "../assets/7.png";
import img6 from "../assets/6.jpg";
import img5 from "../assets/5.webp";
import img8 from "../assets/8.jpg";

const images = [
  chatting,
  diningArea,
  gameandactivity,
  medicalHealth,
  img7,
  img6,
  img5,
  img8,
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap around images array index
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      <Typography variant="h4" textAlign="center" mb={4} fontWeight="bold" color="primary">
        Photos from the Visit
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 3,
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          userSelect: "none",
          height: { xs: 250, md: 400 },
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
              cursor: "pointer",
              userSelect: "none",
            }}
          />
        </AnimatePresence>
        <IconButton
          onClick={() => paginate(-1)}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(0,0,0,0.3)",
            color: "white",
            "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
          }}
          aria-label="previous"
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={() => paginate(1)}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(0,0,0,0.3)",
            color: "white",
            "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
          }}
          aria-label="next"
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Container>
  );
}
