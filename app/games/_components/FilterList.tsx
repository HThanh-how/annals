import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IGenreList } from "../_interface/IGenre";

export default function FilterList({ genres, name }: IGenreList) {
  return (
    <AccordionItem py={2}>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            textColor="whiteAlpha.600"
            _hover={{ textColor: "white" }}
            textTransform={"uppercase"}
            fontSize={"sm"}
          >
            {name}
          </Box>
          <AccordionIcon
            textColor={"whiteAlpha.600"}
            _hover={{ textColor: "white" }}
          />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <VStack>
          {genres?.map((genre) => (
            <Button
              key={genre.id}
              w={"full"}
              justifyContent="flex-start"
              textColor={"whiteAlpha.600"}
              bg={"none"}
              _hover={{ textColor: "white" }}
            >
              {genre.name}
            </Button>
          ))}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
