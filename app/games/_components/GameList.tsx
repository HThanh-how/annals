import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./MobileNav";
import ShowMenu from "./ShowMenu";
import GameCard from "@/app/games/_components/GameCard";
import useGetAllGameApi from "../_api/useGetAllGameApi";

export default function GameList() {
  const [{ data, isLoading, isError }] = useGetAllGameApi();
  return (
    <Box w={"full"} p={0} mr={{ base: 0, lg: 10 }}>
      {/*header*/}
      <Flex>
        <Text textColor={"whiteAlpha.600"}>Show:</Text>
        <ShowMenu />
        <Spacer />
        <MobileNav display={{ base: "block", lg: "none" }} />
      </Flex>

      <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={5}>
        {data?.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            description={game.description}
            price={game.price}
            releaseDate={game.releaseDate}
            genres={game.genres}
          />
        ))}
      </SimpleGrid>
      {/*content*/}
    </Box>
  );
}
