import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack padding={'20px'}>
            <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Dark mode</Text>
        </HStack>
    );

}

export default ColorModeSwitch;