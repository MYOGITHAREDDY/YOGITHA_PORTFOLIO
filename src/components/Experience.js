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
                          <Text>Programmer Analyst Trainee (.NET Developer) | Dec'23 - Apr'24</Text>
                        </Box>
                      </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {[
                        "Developed and supported investment-related client/server applications using ASP.NET Core, SQL Server, and React.",
                        "Delivered reporting enhancements and modules for compliance, accounting, and operational data.",
                        "Partnered with accounting and compliance teams to deliver fixed income reporting systems aligned with investment guidelines.",
                        "Managed production support by investigating call lists, debugging logs, and ensuring system integrity.",
                        "Familiar with fixed income, attribution, compliance, and investment data terminology.",
                        "Designed and tested backend systems to support fixed income and attribution reporting tools.",
                        "Collaborated with stakeholders from operations and business teams to gather requirements and implement system improvements.",
                        "Wrote unit and integration tests using xUnit and contributed to CI pipelines (GitHub Actions).",
                        "Participated in Agile ceremonies including sprint planning, retrospectives, backlog grooming, and demos.",
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
