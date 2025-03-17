import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
  Send,
} from "@mui/icons-material";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);

    // Show success message
    setSnackbar({
      open: true,
      message: "Thank you! Your message has been sent successfully.",
      severity: "success",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: "Email",
      value: "ullas98@gmail.com",
      link: "mailto:ullas98@gmail.com",
    },
    {
      icon: <Phone color="primary" />,
      title: "Phone",
      value: "+1 (945) 527-5369",
      link: "tel:+19455275369",
    },
    {
      icon: <LocationOn color="primary" />,
      title: "Location",
      value: "Dallas, Texas",
      link: "https://maps.google.com/?q=Dallas,Texas",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/ullas-krishna/",
      color: "#0077b5",
      label: "LinkedIn",
    },
    {
      icon: <GitHub />,
      link: "https://github.com/ullaskrishna1",
      color: "#24292e",
      label: "GitHub",
    },
    {
      icon: <Email />,
      link: "mailto:ullas98@gmail.com",
      color: "#ea4335",
      label: "Email",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        position: "relative",
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.4,
          background:
            "radial-gradient(circle at 20% 30%, rgba(33, 150, 243, 0.15) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(63, 81, 181, 0.1) 0%, transparent 20%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h6"
            color="primary"
            fontWeight={500}
            sx={{ mb: 2, letterSpacing: "0.05em", opacity: 0.9 }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h3"
            fontWeight={800}
            sx={{
              mb: 2,
              backgroundImage:
                "linear-gradient(45deg, #1a237e, #0d47a1, #2196f3)",
              backgroundSize: "100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozBackgroundClip: "text",
              MozTextFillColor: "transparent",
            }}
          >
            Let's Connect!
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Feel free to reach out for collaborations, opportunities, or just to
            say hello!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                Contact Information
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}
              >
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={info.link}
                    target={info.title === "Location" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {info.title}
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                Follow Me
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      width: 45,
                      height: 45,
                      backgroundColor: social.color,
                      color: "white",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: `0 10px 15px ${social.color}40`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "white",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                Send Me a Message
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: "30px",
                      textTransform: "none",
                      fontWeight: 600,
                      boxShadow: "0 10px 20px rgba(33, 150, 243, 0.2)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 15px 25px rgba(33, 150, 243, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            pb: 2,
            textAlign: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Ullas Krishna. All rights reserved.
          </Typography>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
