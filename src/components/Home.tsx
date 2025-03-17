import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Link } from "react-scroll";

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
        pt: { xs: 10, md: 0 },
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
          opacity: 0.6,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #eaeef1 2%, transparent 0%), radial-gradient(circle at 75px 75px, #eaeef1 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 1, position: "relative" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Box>
              <Typography
                variant="h6"
                fontWeight={500}
                color="primary.main"
                sx={{ mb: 2, letterSpacing: "0.05em", opacity: 0.9 }}
              >
                Software Engineer
              </Typography>

              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  mb: 3,
                  backgroundImage:
                    "linear-gradient(45deg, #1a237e, #0d47a1, #2196f3)",
                  backgroundSize: "100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  MozBackgroundClip: "text",
                  MozTextFillColor: "transparent",
                  lineHeight: 1.2,
                }}
              >
                Hi, I'm Ullas Krishna
              </Typography>

              <Typography
                variant="h5"
                fontWeight={400}
                color="text.secondary"
                sx={{ mb: 4, maxWidth: "90%" }}
              >
                Building powerful software applications with the{" "}
                <Box component="span" fontWeight={600} color="text.primary">
                  modern tech stack
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  color: "text.secondary",
                  maxWidth: "90%",
                }}
              >
                I specialize in creating responsive, performant applications
                with clean, maintainable code. Currently pursuing a Master's in
                Information Technology & Management at UT Dallas while building
                solutions that make a difference.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 5,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="projects"
                  smooth
                  duration={500}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(33, 150, 243, 0.2)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 25px rgba(33, 150, 243, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View My Work
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="contact"
                  smooth
                  duration={500}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                      backgroundColor: "rgba(33, 150, 243, 0.05)",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Box
                  component="a"
                  href="https://github.com/HemanthKrishna1"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 45,
                    height: 45,
                    borderRadius: "12px",
                    backgroundColor: "#24292e",
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <GitHub fontSize="medium" />
                </Box>

                <Box
                  component="a"
                  href="https://www.linkedin.com/in/hemanth-krishna-/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 45,
                    height: 45,
                    borderRadius: "12px",
                    backgroundColor: "#0077b5",
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0, 119, 181, 0.2)",
                    },
                  }}
                >
                  <LinkedIn fontSize="medium" />
                </Box>

                <Box
                  component="a"
                  href="mailto:k.hemanth1999@gmail.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 45,
                    height: 45,
                    borderRadius: "12px",
                    backgroundColor: "#ea4335",
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(234, 67, 53, 0.2)",
                    },
                  }}
                >
                  <Email fontSize="medium" />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ order: { xs: 1, md: 2 }, textAlign: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(45deg, rgba(33, 150, 243, 0.2), rgba(63, 81, 181, 0.2))",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                  animation: "pulse 4s infinite",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(33, 150, 243, 0.4)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                  animation: "rotate 30s linear infinite",
                },
                "@keyframes pulse": {
                  "0%": {
                    opacity: 0.6,
                    transform: "translate(-50%, -50%) scale(0.95)",
                  },
                  "50%": {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1)",
                  },
                  "100%": {
                    opacity: 0.6,
                    transform: "translate(-50%, -50%) scale(0.95)",
                  },
                },
                "@keyframes rotate": {
                  "0%": {
                    transform: "translate(-50%, -50%) rotate(0deg)",
                  },
                  "100%": {
                    transform: "translate(-50%, -50%) rotate(360deg)",
                  },
                },
              }}
            >
              <Avatar
                alt="Hemanth Krishna"
                src="/Users/hemanth/Desktop/ullas-port/src/assets/profile.jpeg"
                sx={{
                  width: 280,
                  height: 280,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  border: "5px solid white",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          animation: "bounce 2s infinite",
        }}
      >
        <Box
          component={Link}
          to="skills"
          smooth
          duration={500}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-15px)",
              },
              "60%": {
                transform: "translateY(-7px)",
              },
            },
          }}
        >
          <KeyboardArrowDown color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
