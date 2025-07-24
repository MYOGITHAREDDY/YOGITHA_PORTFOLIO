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
import animationData from "../assets/developer.json";
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
            Projects
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
            {/* College Student Placement Analysis */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">Amazon Web Service (AWS)-UDEMY</Heading>
                    <Text fontSize="sm" py={2}>
                      Tools Used: Python (Pandas, Matplotlib, Seaborn), Power BI
                    </Text>
                    <Button
                      as="a"
                      href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto"
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
