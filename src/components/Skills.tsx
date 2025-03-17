import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Tabs,
  Tab,
  Chip,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  DeveloperBoard as DeveloperBoardIcon,
  Build as BuildIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>(
    {}
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <CodeIcon />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Redux", level: 95 },
        { name: "React Query", level: 95 },
        { name: "Angular", level: 65 },
        { name: "Svelte", level: 75 },
      ],
    },
    {
      name: "Backend",
      icon: <DeveloperBoardIcon />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 95 },
        { name: "FastAPI", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "Java", level: 90 },
        { name: "C/C++", level: 90 },
      ],
    },
    {
      name: "Database",
      icon: <StorageIcon />,
      skills: [
        { name: "SQL", level: 95 },
        { name: "PostgreSQL", level: 95 },
        { name: "MongoDB", level: 90 },
      ],
    },
    {
      name: "Tools",
      icon: <BuildIcon />,
      skills: [
        { name: "Git", level: 100 },
        { name: "Docker", level: 100 },
        { name: "AWS", level: 90 },
        { name: "GitHub", level: 100 },
        { name: "Jira", level: 100 },
        { name: "Linux", level: 100 },
      ],
    },
    {
      name: "Other",
      icon: <SchoolIcon />,
      skills: [
        { name: "Data Structures", level: 95 },
        { name: "Algorithms", level: 95 },
        { name: "Operating Systems", level: 90 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [entry.target.id]: true,
              }));
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill-progress").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".skill-progress").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [activeTab]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setAnimatedSkills({});
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
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
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(33, 150, 243, 0.05) 0%, transparent 20%), radial-gradient(circle at 85% 60%, rgba(63, 81, 181, 0.05) 0%, transparent 30%)",
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
            MY EXPERTISE
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
            Skills & Technologies
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            I've worked with various technologies in the software engineering
            world, from front end to back end and deployment.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            mb: 6,
            p: 1,
            borderRadius: 10,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                height: 4,
                borderRadius: 2,
                backgroundColor: "primary.main",
              },
            }}
          >
            {skillCategories.map((category, index) => (
              <Tab
                key={index}
                icon={category.icon as React.ReactElement}
                label={!isMobile ? category.name : undefined}
                iconPosition="start"
                sx={{
                  minHeight: 60,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  "&.Mui-selected": {
                    color: "primary.main",
                  },
                }}
              />
            ))}
          </Tabs>
        </Paper>

        <Box sx={{ minHeight: 300 }}>
          {skillCategories.map((category, tabIndex) => (
            <Fade
              key={tabIndex}
              in={activeTab === tabIndex}
              timeout={500}
              style={{ display: activeTab === tabIndex ? "block" : "none" }}
            >
              <div>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1 }}
                >
                  {category.icon}
                  {category.name} Skills
                </Typography>

                <Grid container spacing={4}>
                  {isMedium ? (
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 4,
                        }}
                      >
                        {category.skills.map((skill) => (
                          <Chip
                            key={skill.name}
                            label={skill.name}
                            color="primary"
                            variant={skill.level > 85 ? "filled" : "outlined"}
                            sx={{
                              fontSize: "0.9rem",
                              fontWeight: 500,
                              py: 2.5,
                              borderRadius: "16px",
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  ) : (
                    category.skills.map((skill, index) => (
                      <Grid item xs={12} md={6} key={skill.name}>
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 1,
                            }}
                          >
                            <Typography variant="subtitle1" fontWeight={600}>
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <Box
                            id={`skill-${tabIndex}-${index}`}
                            className="skill-progress"
                            sx={{
                              position: "relative",
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: "rgba(0,0,0,0.05)",
                            }}
                          >
                            <LinearProgress
                              variant="determinate"
                              value={
                                animatedSkills[`skill-${tabIndex}-${index}`]
                                  ? skill.level
                                  : 0
                              }
                              sx={{
                                height: "100%",
                                borderRadius: 4,
                                transition: "width 1.5s ease-in-out",
                                "& .MuiLinearProgress-bar": {
                                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                  borderRadius: 4,
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </Grid>
                    ))
                  )}
                </Grid>

                <Paper
                  elevation={0}
                  sx={{
                    mt: 6,
                    p: 4,
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.05)",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    My {category.name} Experience
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {category.name === "Frontend" &&
                      "I've built numerous responsive web applications using React and TypeScript, focusing on performance optimization and reusable component architecture. I'm experienced with modern UI frameworks, state management solutions, and API integration techniques."}
                    {category.name === "Backend" &&
                      "My backend experience includes building RESTful APIs and microservices with Python frameworks like FastAPI and Django. I've implemented authentication systems, database integration, and server-side business logic for various applications."}
                    {category.name === "Database" &&
                      "I'm proficient in database design, optimization, and management. I've worked with relational databases like PostgreSQL and non-relational databases like MongoDB, implementing complex queries, migrations, and ensuring data integrity."}
                    {category.name === "Tools" &&
                      "I leverage modern development tools to streamline the development process. From version control with Git to containerization with Docker to cloud deployment on AWS, I'm comfortable with the entire development and deployment ecosystem."}
                    {category.name === "Other" &&
                      "My computer science foundation includes strong knowledge of data structures, algorithms, and operating systems. This theoretical understanding helps me write efficient, scalable code and solve complex technical challenges."}
                  </Typography>
                </Paper>
              </div>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
