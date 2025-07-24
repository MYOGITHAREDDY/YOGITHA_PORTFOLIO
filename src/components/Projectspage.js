import React from 'react';
import { Container, Text, Box, Link, Center, Button } from '@chakra-ui/react';
const ProjectsPage = () => {
  return (
    <Container maxW={'8xl'} id="projects">
      <Box textAlign="center" mb={100}>
        <Text fontWeight={800} fontSize="2xl" mb={4}>
          For Projects
        </Text>
        <Text fontSize="lg" mb={4}>
          Feel free to visit my GitHub profile to get a firsthand look at my projects. You can see the extent of my coding skills and experience in action, showcasing my creativity.
        </Text>
        <Center>
          <Link href="https://github.com/MYOGITHAREDDY" isExternal>
            <Button
              backgroundColor="blue.500"
              color="white"
              borderRadius="md"
              py={4}
              px={8}
              fontSize="lg"
              cursor="pointer"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: 'rotate(5deg)', // Add wobble effect on hover
                backgroundColor: 'blue.600', // Change color on hover
              }}
              _active={{
                backgroundColor: 'blue.700', // Change color on click
              }}
            >
              Visit GitHub
            </Button>
          </Link>
        </Center>
      </Box>
    </Container>
  );
};

export default ProjectsPage;
