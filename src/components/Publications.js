import React from 'react';
import {
  Container,
  Grid,
  Box,
  Text,
  Divider,
  Button,
  Link,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation_lm7xvn06.json'; // Replace with your animation file
import { Reveal } from "./Reveal.tsx";
const Publications = () => {
  return (
    <Container maxW={'8xl'} id="Publications">
      <Grid 
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Animation */}
        <div>
          <Lottie 
            animationData={animationData}
            className="animation-container-PP"
          />
        </div>

        {/* Right Side: Text */}
        <Box>
            <Reveal>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Publications
          </Text>
          </Reveal>
      
          <Divider orientation="horizontal" mb={6} />
       
          {/* Individual Publication */}
          <Box mb={6}>
          <Reveal>
            <Text fontWeight={600} fontSize="lg" mb={8}>
            Convolutional Neural Network-based Automatic Extraction and Fine Generation
            </Text>
            </Reveal>
            <Reveal>
            <Text fontWeight={400}  mb={2}>
             2nd International Conference on Inventive Research in Computing Applications · Jul 14, 2020
            </Text>
            </Reveal>
            <Reveal>
            <Text fontSize="md" fontWeight={300} >
            Numerous reasons lead to dangerous accidents. Lack of helmet is one of the major reasons for death during accidents. People are negligent regarding helmet usage. This needs to be controlled by proper surveillance. The present traffic control system is mostly based on human power. A police officer cannot manage the whole traffic and look out for rule-breakers. It would be a very tough job and will need a lot of human power to cover all the areas. This can be solved through our new automated system where two-wheelers with no helmets will be recognized through yolov2 and the respective frames are taken from the video from which the number plate of the particular vehicle is extracted and the fine for disregarding traffic rules. This fine detail will be updated over the server and message is sent to the phone number registered along with the number plate. This paper is about an automated system where traffic surveillance videos are scavenged for vehicles, where extraction of number plates of vehicles with no helmet and generation of electronic fine management system takes place.
            </Text>
            </Reveal>
          </Box>

          {/* Another Publication */}
          <Reveal>
          <Button as={Link} href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_Our5k8AAAAJ&citation_for_view=_Our5k8AAAAJ:u5HHmVD_uO8C" target="_blank" variant="outline" colorScheme="blue">
            View on Google Scholar
          </Button>
          </Reveal>
        </Box>
      </Grid>
    </Container>
  );
};

export default Publications;
