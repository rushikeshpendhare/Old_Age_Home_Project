import { useState } from "react";
import { Container, Typography, TextField, Button, Alert, Box } from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Here you can add actual form submission logic
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 10 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
        We'd Love to Hear from You
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={5}
          fullWidth
          margin="normal"
          value={formData.message}
          onChange={handleChange}
          error={Boolean(errors.message)}
          helperText={errors.message}
          required
        />

        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 3, py: 1.6, fontWeight: "bold" }}>
          Send Message
        </Button>

        {submitted && <Alert severity="success" sx={{ mt: 4 }}>Thanks for your message! We’ll get back to you shortly.</Alert>}
      </Box>

      <Box sx={{ mt: 5, fontSize: 16, color: "text.secondary" }}>
        <Typography><strong>Address:</strong> 96, Navi Peth, Thoasar Paga, Pune 411 030, Maharashtra, India</Typography>
        <Typography>
          <strong>Email:</strong> <a href="mailto:niwarapune@gmail.com">niwarapune@gmail.com</a> | <strong>Phone:</strong> +91 9123456789
        </Typography>
      </Box>
    </Container>
  );
}
