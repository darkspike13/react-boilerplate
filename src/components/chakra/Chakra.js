import {
  Box,
  ChakraProvider,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

const Chakra = () => (
    <ChakraProvider>
        <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
    </ChakraProvider>
);

export default Chakra;
