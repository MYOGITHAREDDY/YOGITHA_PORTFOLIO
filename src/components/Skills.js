import React from "react";
import Lottie from "lottie-react";
import { Divider, Text, Container, Grid, Box, Flex } from "@chakra-ui/react";
import animationData from "../assets/Skills.json";
import { Fade } from "react-reveal";

const techSkills = [
  // Core Programming
  "Python", "Java", "C#", "JavaScript", "SQL", "HTML", "CSS",

  // Frameworks & Libraries
  "Flask", "Spring Boot", ".NET", "React", "Node.js", "Bootstrap", "jQuery",

  // Databases & Data Tools
  "MySQL", "PostgreSQL", "MongoDB", "Oracle", "DBMS", "Power BI", "Tableau",

  // Cloud & DevOps
  "AWS", "Git", "CI/CD", "REST APIs",

  // Concepts & Methodologies
  "OOP", "Microservices", "Networking", "Agile", "UI/UX"
];


const softSkills = [
  {
    title: "Soft Skills",
    content:
      "Strong Communication, Leadership, Teamwork, Time Management, Problem Solving, Adaptability",
  },
];

export default function Skills({ color }) {
  return (
    <Container maxW={"8xl"} id="skills">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side - Skills */}
        <Fade>
          <Box>
            <Text fontWeight={800} fontSize="2xl" mb={4}>
              Skills
            </Text>
            <Divider orientation="horizontal" mb={10} />

            <ul
              style={{
                columns: 2,
                WebkitColumns: 2,
                MozColumns: 2,
                paddingLeft: "0",
              }}
            >
              {techSkills.map((skill, index) => (
                <li key={index} style={{ listStyle: "none", marginBottom: "8px" }}>
                  <Fade bottom>
                    <Flex align="center">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        style={{ marginRight: "0.5rem", flexShrink: 0 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Text>{skill}</Text>
                    </Flex>
                  </Fade>
                </li>
              ))}
            </ul>

            <Divider orientation="horizontal" my={10} />

            {softSkills.map((soft, idx) => (
              <Fade key={idx} bottom>
                <Box mb={6}>
                  <Flex align="center" mb={2}>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      style={{ marginRight: "0.5rem" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Text fontWeight={800}>{soft.title}</Text>
                  </Flex>
                  <Text color={"gray.500"} fontSize="lg">
                    {soft.content}
                  </Text>
                </Box>
              </Fade>
            ))}
          </Box>
        </Fade>

        {/* Right Side - Animation */}
        <div className="animation-container-S">
          <Lottie animationData={animationData} />
        </div>
      </Grid>
    </Container>
  );
}
