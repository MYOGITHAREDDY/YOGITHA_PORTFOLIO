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

        {/* Project Carousel */}
        <Stack flex="1" px={4} spacing={4} align="center" justifyContent="center">
          <Carousel className="Pbox" showThumbs={false} showStatus={false}>
            {/* College Student Placement Analysis */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">College Student Placement Analysis</Heading>
                    <Text fontSize="sm" py={2}>
                      Tools Used: Python (Pandas, Matplotlib, Seaborn), Power BI
                    </Text>
                    <Text fontSize="sm" py={2}>
                      • Cleaned and prepared 10,000+ student records using Python (Pandas) to remove nulls and standardize labels.
                      <br />
                      • Performed Exploratory Data Analysis (EDA) with Seaborn and Matplotlib to examine the impact of CGPA, internships, project count, and communication skills on placement outcomes.
                      <br />
                      • Built a Power BI dashboard with interactive slicers and charts to visualize:
                    </Text>
                    <ul style={{ paddingLeft: "20px" }}>
                      <li>Placement distribution</li>
                      <li>CGPA comparison by placement status</li>
                      <li>Internship effect on placement</li>
                      <li>Project count vs. placement success</li>
                      <li>Communication skills and placement trends</li>
                    </ul>
                    <Text fontSize="sm" py={2}>
                      • Implemented transformation logic in Power BI to handle unknown values and ensure accurate analysis.
                      <br />
                      • Published all code, cleaned dataset, and Power BI dashboard to GitHub.
                    </Text>
                    <Button
                      as="a"
                      href="https://github.com/MYOGITHAREDDY/college-student-placement-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="teal"
                      size="sm"
                      mt={3}
                    >
                      View GitHub Repo
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            {/* Smart Expense Tracker */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">Smart Expense Tracker</Heading>
                    <Text fontSize="sm" py={2}>
                      A web app to manage daily expenses with real-time visual insights. Built with AWS services including Cognito, Lambda, and DynamoDB. Supports authentication, data visualization using Chart.js, and works across devices.
                    </Text>
                    <Text fontSize="sm">
                      Future plans include report downloads, OAuth login, and profile settings.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            {/* AWS Serverless Contact Form */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">AWS Serverless Contact Form</Heading>
                    <Text fontSize="sm" py={2}>
                      Real-time contact form using AWS Lambda, API Gateway, and DynamoDB. Scalable and secure, capable of handling 10K+ daily requests with low latency.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            {/* Restaurant Management System */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">Restaurant Management System</Heading>
                    <Text fontSize="sm" py={2}>
                      Built with Flask and MySQL, this system supports QR-based login for dine-in customers, real-time order processing, admin-side menu management, and secure payments via OTP.
                    </Text>
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
