import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
   genreId?: number;
   platformId?: number;
   sortOrder: string;
   searchText: string;
}

function App() {
   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

   return (
      <Grid
         templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
         }}
         templateColumns={{
            base: "1fr",
            lg: "250px 1fr",
         }}
      >
         <GridItem area="nav">
            <NavBar
               onSearch={(searchText: string) =>
                  setGameQuery({ ...gameQuery, searchText })
               }
            />
         </GridItem>
         <Show above="lg">
            <GridItem area="aside" paddingX={2}>
               <GenreList
                  selectedGenreId={gameQuery.genreId}
                  onSelectGenre={(genre) =>
                     setGameQuery({ ...gameQuery, genreId: genre.id })
                  }
               ></GenreList>
            </GridItem>
         </Show>
         <GridItem area="main">
            <Box marginLeft={2}>
               <GameHeading gameQuery={gameQuery} />
               <HStack spacing={5} marginBottom={3}>
                  <PlatformSelector
                     selectedPlatformId={gameQuery.platformId}
                     onSelectPlatform={(platform) =>
                        setGameQuery({ ...gameQuery, platformId: platform.id })
                     }
                  />
                  <SortSelector
                     sortOrder={gameQuery.sortOrder}
                     onSelectSortOrder={(sortOrder) =>
                        setGameQuery({ ...gameQuery, sortOrder })
                     }
                  />
               </HStack>
            </Box>
            <GameGrid gameQuery={gameQuery} />
         </GridItem>
      </Grid>
   );
}

export default App;
