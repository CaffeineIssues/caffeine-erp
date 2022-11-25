import { Search2Icon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    chakra,
    Flex,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

interface Module {
    props: string
}

function Menu(props: Module) {
    console.log(props)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    return (
        <>
            <Flex
                width="100%"
                height="100vh"
                bg={useColorModeValue('#333', 'gray.900')}
            >
                <VStack w="100%" mt={16} textColor="white">
                    <VStack w="100%" textAlign="center" height="15%">
                        <HStack width="90%">
                            <InputGroup>
                                <Input
                                    name="searchBar"
                                    placeholder="buscar"
                                    focusBorderColor="teal"
                                    backgroundColor="white"
                                    shadow="lg"
                                    textColor="black"
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter') {
                                            console.log('searching')
                                        }
                                    }}
                                />
                                <InputLeftElement width="15%">
                                    <Button
                                        variant="ghost"
                                        colorScheme="red"
                                        width="100%"
                                        children={<Search2Icon color="black" />}
                                        onClick={() => {
                                            console.log('click')
                                        }}
                                        isLoading={loading}
                                    ></Button>{' '}
                                </InputLeftElement>
                            </InputGroup>
                        </HStack>
                        <Button w="90%" colorScheme="red" variant="solid">
                            Novo Chamado
                        </Button>
                    </VStack>
                    <Box
                        w="100%"
                        height="5%"
                        id="menu-opt"
                        onClick={() => {
                            console.log('click')
                        }}
                    >
                        <chakra.p
                            height="100%"
                            lineHeight="100%"
                            verticalAlign="middle"
                            margin="5%"
                            fontWeight="bold"
                        >
                            Administração
                        </chakra.p>
                    </Box>
                    <Box
                        w="100%"
                        height="5%"
                        id="menu-opt"
                        onClick={() => {
                            console.log('click')
                        }}
                    >
                        <chakra.p
                            height="100%"
                            lineHeight="100%"
                            verticalAlign="middle"
                            margin="5%"
                            fontWeight="bold"
                        >
                            Relatorios
                        </chakra.p>
                    </Box>
                    <Box
                        w="100%"
                        height="5%"
                        id="menu-opt"
                        onClick={() => {
                            console.log('click')
                        }}
                    >
                        <chakra.p
                            height="100%"
                            lineHeight="100%"
                            verticalAlign="middle"
                            margin="5%"
                            fontWeight="bold"
                        >
                            Clientes
                        </chakra.p>
                    </Box>
                    <Accordion w="100%" allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    fontWeight="bold"
                                    textAlign="left"
                                >
                                    Chamados
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb={4} width="100%">
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Todos
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Aguardando Operador
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Chamados em Atraso
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Em Atendimento
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Abertos
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Fechados
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Cancelados
                                </Box>
                                <Box w="100%" height="5%" id="menu-opt" mb="2%">
                                    Busca Avançada
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Box w="100%" height="5%" id="menu-opt">
                        <chakra.p
                            height="100%"
                            lineHeight="100%"
                            verticalAlign="middle"
                            margin="5%"
                            fontWeight="bold"
                        >
                            Meus Chamados
                        </chakra.p>
                    </Box>
                    <Box w="100%" height="5%" id="menu-opt">
                        <chakra.p
                            height="100%"
                            lineHeight="100%"
                            verticalAlign="middle"
                            margin="5%"
                            fontWeight="bold"
                        >
                            Chat
                        </chakra.p>
                    </Box>
                </VStack>
            </Flex>
        </>
    )
}

export default Menu
