import {
  Divider,
  Stack,
  Text,
  Container,
  Card,
  CardBody,
  Grid,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { Carousel } from "react-responsive-carousel";
import animationData from "../assets/Certificate.json";
import Lottie from "lottie-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects({ color }) {
  return (
    <Container maxW={"8xl"} id="projects">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Intro + Animation */}
        <div>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Certifications
          </Text>
          <Divider orientation="horizontal" />
          <Lottie
            animationData={animationData}
            className="animation-container-p"
          />
        </div>

        {/* Certificates Carousel */}
        <Stack flex="1" px={4} spacing={4} align="center" justifyContent="center">
          <Carousel className="Pbox" showThumbs={false} showStatus={false}>
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">Amazon Web Service (AWS)-UDEMY</Heading>
                    <Text fontSize="sm" py={2}>
                      Completed foundational training on AWS Cloud services, including Lambda, EC2, S3, and IAM with hands-on practice.
                    </Text>
                    <Button
                      as="a"
                      href="https://drive.google.com/file/d/1D2lr4ZnqXF9s6VhE3ZpD6JPjc3nV3g4i/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="teal"
                      size="sm"
                      mt={3}
                    >
                      View Certificate
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">PYTHON </Heading>
                    <Text fontSize="sm" py={2}>
                      Demonstrated proficiency in Python programming, including data structures, control flow, and algorithmic problem-solving.
                    </Text>
                    <Button
                      as="a"
                      href="https://drive.google.com/file/d/1W2fgVs4BwJcon6KiOrW17s5_IOEw0vIG/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="teal"
                      size="sm"
                      mt={3}
                    >
                      View Certificate
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">DBMS </Heading>
                    <Text fontSize="sm" py={2}>
                      Covered relational database concepts including ER modeling, normalization, indexing, and writing optimized SQL queries.
                    </Text>
                    <Button
                      as="a"
                      href="https://drive.google.com/file/d/1Vf3tqa1VWGdWKJ2288U-ztIMXwrWAXD_/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="teal"
                      size="sm"
                      mt={3}
                    >
                      View Certificate
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">HTML </Heading>
                    <Text fontSize="sm" py={2}>
                      Gained practical knowledge of HTML structure, semantic tags, and responsive page layouts for modern web development.
                    </Text>
                    <Button
                      as="a"
                      href="https://drive.google.com/file/d/1zDvgvMmCsU59JhFjUoNfr6Yz6QiyEhNr/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="teal"
                      size="sm"
                      mt={3}
                    >
                      View Certificate
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

          </Carousel>
        </Stack>
      </Grid>
    </Container>
  );
}
