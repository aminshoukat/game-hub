import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {

    const {data} = useGenres();

    return (
        <>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY={2}>
                        <HStack>
                            <Image borderRadius={3} boxSize='32px' src={genre.image_background} />
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
export default GenreList;