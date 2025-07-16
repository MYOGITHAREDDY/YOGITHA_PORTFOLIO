import {
  Divider,
  Stack,
  Text,
  Container,
  Card,
  CardBody,
  Grid,
  Heading,
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
            {/* Smart Expense Tracker */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20} h={[null, "40vh"]}>
                    <Heading size="sm">Smart Expense Tracker</Heading>
                    <Text fontSize="sm" py={2}>
                      Smart Expense Tracker is a fully functional web application designed to help users manage their daily expenses with real-time insights and secure data handling.
                      Built entirely using AWS cloud services, the system features user authentication through AWS Cognito, serverless business logic via Lambda functions, and expense storage using DynamoDB. Users can add, view, and delete expenses, and explore spending trends through interactive charts powered by Chart.js.
                      The application offers a modern and responsive UI, works seamlessly across devices, and demonstrates strong cloud architecture, secure backend integration, and intuitive user experience. 
                    </Text>
                    <Text>
                      Future plans include integrating Google/Facebook login, adding report downloads, and allowing users to manage profile settings.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            {/* AWS Serverless Contact Form */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20} h={[null, "40vh"]}>
                    <Heading size="sm">AWS Serverless Contact Form</Heading>
                    <Text fontSize="sm" py={2}>
                      Created a real-time reporting API using Python (Lambda), API Gateway, and DynamoDB
                      with IAM-based access control. Scaled to 10,000+ daily requests with latency under
                      200 ms—demonstrating production-grade performance.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>

            {/* Restaurant Management System */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20} h={[null, "40vh"]}>
                    <Heading size="sm">Restaurant Management System</Heading>
                    <Text fontSize="sm" py={2}>
                      The Restaurant Management System is a comprehensive web-based application designed to streamline online and in-person food ordering for restaurants. Built using Flask (Python) and MySQL, the system supports both customer and admin roles with secure authentication. Customers can browse a visually dynamic menu, add items to their cart, choose a payment method (card or cash), and complete orders with OTP verification. The admin dashboard allows real-time order tracking, menu management, and filtering of sales by date ranges (daily, monthly, yearly).
                    </Text>
                    <Text>
                      Additionally, QR code-based login makes it mobile-friendly for dine-in customers, simplifying access to menu and ordering. The system is fully responsive and can be tested across devices via a secure Ngrok tunnel.
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
