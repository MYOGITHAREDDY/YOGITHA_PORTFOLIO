import React from 'react';
import {
  Container,
  Grid,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import animationData from '../assets/R6IO8MHpbe.json'; // Replace with your animation file path
import { Reveal } from "./Reveal.tsx";

const EducationPage = () => {
  return (
    <Container maxW={'8xl'} id="Education">
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side */}
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Education
          </Text>
          <Divider orientation="horizontal" mb={6} />

          {/* Masters */}
          <Box mb={6}>
            <Reveal>
              <Text fontWeight={600} fontSize="lg">
                University of Central Missouri{' '}
                <span style={{ color: 'gray' }}>| Expected Graduation: Dec 2025</span>
              </Text>
            </Reveal>
            <Reveal>
              <Text fontWeight={400}>
                Masters in Computer Science
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>GPA: 3.71 / 4.0</Text>
            </Reveal>

            {/* Description bullet points */}
            <Reveal>
              <Text fontSize="md" fontWeight={200} mt={3}>
                • Advanced coursework in Data Structures, Algorithms, Distributed Systems, and Machine Learning.
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                • Hands-on projects involving cloud computing with AWS and Azure.
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                • Research and practical experience in secure software development and data analysis.
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                • Collaborated in team-based projects applying Agile methodologies.
              </Text>
            </Reveal>
          </Box>

          {/* Bachelor */}
          <Box>
            <Reveal>
              <Text fontWeight={600} fontSize="lg">
                Vignan Institute of Management and Technology for Women, India{' '}
                <span style={{ color: 'gray' }}>| Aug 2019 - Jul 2023</span>
              </Text>
            </Reveal>
            <Reveal>
              <Text fontWeight={400}>
                Bachelor of Technology in Electronics and Communication Engineering
              </Text>
            </Reveal>

            {/* Description bullet points */}
            <Reveal>
              <Text fontSize="md" fontWeight={200} mt={3}>
                • Studied core subjects including Electronics, Communication Systems, and Embedded Systems.
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                • Completed projects on signal processing and IoT-based smart devices.
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                • Gained skills in programming languages such as C++, Python, and MATLAB.
              </Text>
            </Reveal>
            <Reveal>
              <Text fontSize="md" fontWeight={200}>
                • Active participation in technical workshops and seminars.
              </Text>
            </Reveal>
          </Box>
        </Box>

        {/* Right Side Animation */}
        <div>
          <Lottie
            animationData={animationData}
            className="animation-container-E"
          />
        </div>
      </Grid>
    </Container>
  );
};

export default EducationPage;
