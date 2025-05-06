import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const navItems = ["Home", "Skills", "Projects", "Work", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveSection(item.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setMobileOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        color: "black",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          <Typography
            variant="h5"
            component={Link}
            to="home"
            smooth
            duration={500}
            sx={{
              fontWeight: 700,
              cursor: "pointer",
              background: "linear-gradient(45deg, #3f51b5, #2196f3)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozBackgroundClip: "text",
              MozTextFillColor: "transparent",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Ullas Krishna
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item.toLowerCase()}
                smooth
                duration={500}
                spy
                sx={{
                  position: "relative",
                  px: 2,
                  py: 1,
                  mx: 0.5,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "text.primary",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: activeSection === item.toLowerCase() ? "70%" : "0%",
                    height: "3px",
                    bottom: "5px",
                    left: "15%",
                    backgroundColor: "primary.main",
                    transition: "all 0.3s ease",
                    borderRadius: "10px",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    "&::after": {
                      width: "70%",
                    },
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Button
              variant="contained"
              color="primary"
              href="/resume.pdf"
              target="_blank"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                fontWeight: 600,
                borderRadius: "30px",
                backgroundColor: "primary.main",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(63, 81, 181, 0.2)",
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 15px rgba(63, 81, 181, 0.3)",
                },
              }}
            >
              Resume
            </Button>
          </Box>

          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { md: "none" },
              color: "text.primary",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "75%",
            maxWidth: "300px",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundImage: "linear-gradient(135deg, #f5f7fa, #ffffff)",
            boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.1)",
            px: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            px: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #3f51b5, #2196f3)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozBackgroundClip: "text",
              MozTextFillColor: "transparent",
            }}
          >
            Hemanth Krishna
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ py: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item}
              disablePadding
              sx={{
                mb: 1,
              }}
            >
              <Button
                component={Link}
                to={item.toLowerCase()}
                smooth
                duration={500}
                onClick={toggleDrawer(false)}
                fullWidth
                sx={{
                  py: 1.5,
                  justifyContent: "flex-start",
                  pl: 2,
                  borderRadius: "10px",
                  fontWeight: 600,
                  backgroundColor:
                    activeSection === item.toLowerCase()
                      ? "rgba(63, 81, 181, 0.1)"
                      : "transparent",
                  color:
                    activeSection === item.toLowerCase()
                      ? "primary.main"
                      : "text.primary",
                  "&:hover": {
                    backgroundColor: "rgba(63, 81, 181, 0.1)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {item}
              </Button>
            </ListItem>
          ))}
        </List>

        <Box sx={{ px: 2, py: 3, mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="/resume.pdf"
            target="_blank"
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: 600,
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(63, 81, 181, 0.2)",
              textTransform: "none",
              "&:hover": {
                boxShadow: "0 8px 15px rgba(63, 81, 181, 0.3)",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
