import React from "react";
import { Input, Box, Center, NativeBaseProvider } from "native-base";

function Input_NB (){
    return(
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Box alignItems="center">
                    <Input mx="3" placeholder="Input" w="100%" />
                </Box>
            </Center>
      </NativeBaseProvider>

    )
}

export default Input_NB;