import React, { useState } from "react";
import {
  Divider,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { Reveal } from "./Reveal.tsx";

import cognizantLogo from "../assets/cognizant.png"; // Update this path as needed
import verizonLogo from "../assets/verizon.png"; // Add your Verizon logo here

export default function Experience({ color }) {
  const [selectedExperience, setSelectedExperience] = useState("cognizant");

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <>
      <Container maxW={"8xl"} id="experience">
        <Box
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 2 }}
          pb={{ base: 20, md: 36 }}
        >
          <div>
            <Text fontWeight={800} fontSize="2xl" mb={4}>
              Experience
            </Text>
            <Divider mb={8} orientation="horizontal" />
          </div>

          <Center px={4}>
            <ButtonGroup variant="outline" mb={8}>
              <Button onClick={() => handleSelectExperience("cognizant")}>
                Cognizant
              </Button>
              <Button onClick={() => handleSelectExperience("verizon")}>
                Verizon (Virtual)
              </Button>
            </ButtonGroup>
          </Center>

          {/* Cognizant Experience */}
          {selectedExperience === "cognizant" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <Reveal>
                      <HStack>
                        <Image
                          src={cognizantLogo}
                          alt="Cognizant Logo"
                          h={10}
                        />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Cognizant</Text>
                          <Text>Programmer Analyst Trainee| Dec'23 - Apr'24</Text>
                        </Box>
                      </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {[
                        "As a Programmer Analyst Trainee, I was part of a development team working on internal tools used for investment reporting and compliance tracking. During this time, I got hands-on experience working with real enterprise systems and teams.",

                        "Contributed to backend enhancements for web applications built with ASP.NET Core and SQL Server, supporting financial reporting use cases.",

                        "Wrote and modified basic SQL queries to help generate reports and validate data for operational and compliance teams.",

                        "Collaborated with team members to build simple visual reports using Power BI, highlighting key metrics for internal users.",

                        "Used Python (Pandas) in a few tasks to clean datasets and support data validation scripts used by senior developers.",

                        "Participated in Agile sprints, code walkthroughs, and team meetings, which gave me exposure to real-world software development processes.",

                        "Assisted in basic production support activities like reviewing logs, replicating issues in dev environments, and testing fixes before deployment.",

                        "Gained foundational understanding of CI/CD using GitHub Actions and how cloud services like AWS Lambda and Cognito are integrated into modern applications.",
                      ].map((item, index) => (
                        <Reveal key={index}>
                          <ListItem>
                            <ListIcon boxSize={6} as={ChevronRightIcon} color={`${color}.500`} />
                            {item}
                          </ListItem>
                        </Reveal>
                      ))}
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter />
              </Card>
            </Fade>
          )}

          {/* Verizon Virtual Experience */}
          {selectedExperience === "verizon" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <Reveal>
                      <HStack>
                        <Image
                          src={verizonLogo}
                          alt="Verizon Logo"
                          h={10}
                        />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Verizon</Text>
                          <Text>Software Engineering Virtual Experience | Forage</Text>
                        </Box>
                      </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {[
                        "Completed Verizon’s Software Engineering Virtual Experience Program via Forage.",
                        "Explored core engineering principles including agile collaboration, frontend/backend development, and testing.",
                        "Worked on a simulated project to build scalable applications using modern software engineering practices.",
                        "Practiced writing clean and maintainable code while collaborating with mock cross-functional teams.",
                        "Gained insights into Verizon’s developer culture and engineering standards.",
                      ].map((item, index) => (
                        <Reveal key={index}>
                          <ListItem>
                            <ListIcon boxSize={6} as={ChevronRightIcon} color={`${color}.500`} />
                            {item}
                          </ListItem>
                        </Reveal>
                      ))}
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter />
              </Card>
            </Fade>
          )}
        </Box>
      </Container>
    </>
  );
}
