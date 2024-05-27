import { Container, Text, VStack, Heading, Box, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            ABD eSwatini Business Incubation
          </Heading>
          <Text fontSize="lg">Empowering informal businesses to thrive in the digital age</Text>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzE2ODE5MjU3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Meeting" borderRadius="md" />
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Our Services
          </Heading>
          <Text fontSize="md">We provide a range of services to help informal businesses establish and grow their digital presence.</Text>
        </Box>

        <HStack spacing={4} justify="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Business Registration</Heading>
            <Text mt={4}>We assist in registering your business and making it official.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Digital Marketing</Heading>
            <Text mt={4}>We help you create a strong online presence through effective digital marketing strategies.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Training & Workshops</Heading>
            <Text mt={4}>We offer training and workshops to enhance your business skills.</Text>
          </Box>
        </HStack>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Get in Touch
          </Heading>
          <Text fontSize="md">Ready to take your business to the next level? Contact us today!</Text>
          <Button mt={4} colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Follow Us
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
