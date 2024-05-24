import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";
import PlaceDetail from "./PlaceDetail";

const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      <Flex
      direction={["row", "column"]}
      bg={"whiteAlpha.900"}
        width={["100vw", "80vw", "50vw", "37vw"]} // Responsive widths
        height={["37vh", "80vh", "50vh", "100vh"]}
        position={"absolute"}
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden"
        px={[1, 2, 3, 4]} // Responsive padding
      >
        <Box padding="6" boxShadow="lg" bg="white" mt={16}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    );

  return (
    <Flex
    direction={["row", "column"]}
    bg={"whiteAlpha.900"}
      width={["100vw", "80vw", "50vw", "37vw"]} // Responsive widths
      height="100vh"
      position={"absolute"}
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden"
      px={[1, 2, 3, 4]} // Responsive padding
    >
      <Flex
        flex={1}
        overflowY={"scroll"}
        mt={[8, 12, 16]} // Responsive top margin
        direction={["row", "column"]}
      >
        {places &&
          places.map((place, i) => <PlaceDetail place={place} key={i} />)}
      </Flex>
    </Flex>
  );
};

export default List;
