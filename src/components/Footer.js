import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        py={4}
        align="center"
      >
        <Text>© 2025 YOGITHA REDDY MALGIREDDY. All rights reserved</Text>
      </Container>
    </Box>
  );
}
