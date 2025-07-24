import React from "react";
import { Container, Box, Text, Heading, Divider, Button, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Certifications({ color }) {
  return (
    <Container maxW="6xl" id="certifications" py={10}>
      <Heading as="h2" fontSize="3xl" mb={4} color={color || "teal"}>
        Certifications
      </Heading>
      <Divider mb={6} />

      <Stack spacing={6}>
        <Box
          p={5}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
        >
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            Amazon Web Services – Udemy
          </Text>
          <Text fontSize="md" color="gray.600">
            Completed foundational training on AWS Cloud services, including Lambda, EC2, S3, and IAM with hands-on practice.
          </Text>
          <Button
            as="a"
            href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto"
            target="_blank"
            rel="noopener noreferrer"
            mt={4}
            colorScheme="teal"
            rightIcon={<ExternalLinkIcon />}
          >
            View Certificate
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
