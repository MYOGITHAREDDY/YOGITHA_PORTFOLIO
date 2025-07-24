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
                      Tools: AWS (Cognito, Lambda, API Gateway, DynamoDB), HTML/CSS/JavaScript, Chart.js
                      <br/>
                        • Built a cloud-based web application to help users track daily expenses securely and in real-time.
                        <br/>
                        • Implemented user authentication using AWS Cognito and secured APIs using IAM and API Gateway.
                        <br/>
                        • Developed backend logic with AWS Lambda for adding, fetching, and deleting expenses, with data stored in DynamoDB.
                        <br/>
                        • Designed interactive frontend dashboards using HTML/CSS/JS and Chart.js for visual insights.
                        <br/>
                        • Ensured only authenticated users could access or modify their data, with session-based authorization.
                        <br/>
                        • Handled error management for login failures, invalid form data, and API issues.
                        <br/>
                        • Tested complete user workflows: signup, confirmation, login, add/view/delete expenses.
                        <br/>
                        • Focused on scalability, security, and user experience, following best practices for serverless design.
                        <br/>
                    </Text>
                    <Text fontSize="sm">
                      Future plans include report downloads, OAuth login, and profile settings.
                    </Text>
                    <Button
                      as="a"
                      href="https://github.com/MYOGITHAREDDY/SmartExpenseTracker"
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

            {/* Restaurant Management System */}
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px={10} py={6} mb={20}>
                    <Heading size="sm">Restaurant Management System</Heading>
                    <Text fontSize="sm" py={2}>
                      Tools: Flask (Python), MySQL, HTML/CSS, Jinja2, QRCode, Ngrok
                      <br/>
                      • Developed a full-stack web application to streamline restaurant operations for both customers and administrators.
                      <br/>
                      • Implemented role-based login using Flask sessions, allowing separate views and functionality for customers and admins.
                      <br/>
                      • Designed a dynamic menu system with item images, prices, and cart integration using HTML/CSS and Jinja2 templates.
                      <br/>
                      • Built customer workflows to view the menu, add items to the cart, select payment method (card, cash, tap-to-pay), and confirm orders with OTP.
                      <br/>
                      • Integrated QR code support for table-based ordering, with a unified code directing all users to the login page and capturing their table number.
                      <br/>
                      • Created an admin panel with options to add/edit/delete menu items and view sales summaries.
                      <br/>
                      • Enabled admin analytics using daily, monthly, yearly, and custom date-range filters for sales tracking.
                      <br/>
                      • Used Ngrok for generating a public URL to test the application across devices via QR scanning.
                      <br/>
                      • Focused on usability, responsive design, and modular architecture to support future scalability and deployments
                    </Text>
                    <Button
                      as="a"
                      href="https://github.com/MYOGITHAREDDY/Restaurant_Management"
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

          </Carousel>
        </Stack>
      </Grid>
    </Container>
  );
}
