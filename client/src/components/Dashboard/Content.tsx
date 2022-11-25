import React from 'react'
import { Card, Text, useColorModeValue, VStack } from '@chakra-ui/react'

function Content() {
    return (
        <>
            <VStack w="100%" h={900}>
                <Text fontWeight="bold" w="97%" mt="1%">
                    Meu Painel
                </Text>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow="hidden"
                    variant="outline"
                    mt="1%"
                    w="98%"
                    h="100%"
                    borderRadius="15px"
                    boxShadow="md"
                    bg={useColorModeValue('gray.100', 'gray.900')}
                ></Card>
            </VStack>
        </>
    )
}

export default Content
