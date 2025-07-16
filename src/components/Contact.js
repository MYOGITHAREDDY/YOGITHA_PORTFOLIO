import { Container, Divider, Grid, Text, Box, HStack, Heading, Center, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/Email.json"; // Use your own Lottie file here
import { Reveal } from "./Reveal.tsx";

export default function Contact({ color }) {
  return (
    <Container maxW={"8xl"} id="contact">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Contact Details */}
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Contact
          </Text>
          <Divider orientation="horizontal" mb={20} />
          <Stack spacing={4} as={Container} maxW={"3xl"}>
            <Reveal>
              <div className="contact">
                <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
              </div>
            </Reveal>
            <Reveal>
              <Text color={"gray.600"} fontSize={"xl"} px={4}>
                Interested in full-stack or cloud projects? Reach out and let’s collaborate!
              </Text>
            </Reveal>
            <Center>
              <Reveal>
                <HStack spacing={8} pt={4}>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/yogitha-reddy-3301a21a9/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={44} color={`${color}.500`} />
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/MYOGITHAREDDY" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={44} color={`${color}.500`} />
                  </a>
                  {/* Email */}
                  <a href="mailto:malgireddyy@gmail.com">
                    <FaEnvelope size={44} color={`${color}.500`} />
                  </a>
                  {/* Phone */}
                  <a href="tel:+19134136850">
                    <FaPhone size={44} color={`${color}.500`} />
                  </a>
                </HStack>
              </Reveal>
            </Center>
            <Center>
              <Reveal>
                <Text fontWeight={600} fontSize={"lg"} mt={10} color={"gray.600"}>
                  <a href="mailto:malgireddyy@gmail.com">malgireddyy@gmail.com</a>
                </Text>
              </Reveal>
            </Center>
          </Stack>
        </Box>

        {/* Right Side Animation */}
        <Lottie animationData={animationData} />
      </Grid>
    </Container>
  );
}
