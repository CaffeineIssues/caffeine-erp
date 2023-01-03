import React from 'react'
import {
    Box,
    Card,
    chakra,
    Flex,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'

function Content() {
    return (
        <>
            <VStack w="100%" h={900}>
                <Text fontWeight="bold" w="97%" mt="1%">
                    Meu Painel
                </Text>
                <Flex w="98%" h="30%" paddingBottom="2%">
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow="hidden"
                        variant="outline"
                        mt="1%"
                        w="50%"
                        h="100%"
                        borderRadius="15px"
                        boxShadow="md"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                    >
                        <Heading pl="2%" pt="2%" size="sm">
                            Quantidade de chamados resolvidos:
                        </Heading>
                    </Card>
                    <Box w="1%"></Box>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow="hidden"
                        variant="outline"
                        mt="1%"
                        w="50%"
                        h="100%"
                        borderRadius="15px"
                        boxShadow="md"
                        bg={useColorModeValue('gray.100', 'gray.900')}
                    >
                        <Heading pl="2%" pt="2%" size="sm">
                            Quantidade de chamados em aberto:
                        </Heading>
                    </Card>
                </Flex>

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow="hidden"
                    variant="outline"
                    w="98%"
                    h="70%"
                    borderRadius="15px"
                    boxShadow="md"
                    bg={useColorModeValue('gray.100', 'gray.900')}
                >
                    <VStack w="100%">
                        <Heading alignSelf="start" pl="2%" pt="2%" size="sm">
                            Meus chamados em aberto:
                        </Heading>
                        <TableContainer w="100%">
                            <Table variant="simple" colorScheme="black">
                                <TableCaption></TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Protocolo</Th>
                                        <Th>Assunto</Th>
                                        <Th>Setor</Th>
                                        <Th>Cliente</Th>
                                        <Th>Categoria</Th>
                                        <Th>Data/Hora</Th>
                                        <Th>Status</Th>
                                        <Th>Situação</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>#01</Td>
                                        <Td>Erro ao cadastrar entrada</Td>
                                        <Td>Financeiro</Td>
                                        <Td>Maria Clara Pereira</Td>
                                        <Td>Erro</Td>
                                        <Td>16:59</Td>
                                        <Td>Em aberto</Td>
                                        <Td>
                                            respondido, Aguardando Resposta do
                                            cliente
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>#02</Td>
                                        <Td>Erro ao cadastrar saida</Td>
                                        <Td>Financeiro</Td>
                                        <Td>Maria Clara Pereira</Td>
                                        <Td>Erro</Td>
                                        <Td>17:25</Td>
                                        <Td>Em aberto</Td>
                                        <Td>
                                            respondido, Aguardando Resposta do
                                            cliente
                                        </Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Protocolo</Th>
                                        <Th>Assunto</Th>
                                        <Th>Setor</Th>
                                        <Th>Cliente</Th>
                                        <Th>Categoria</Th>
                                        <Th>Data/Hora</Th>
                                        <Th>Status</Th>
                                        <Th>Situação</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </VStack>
                </Card>
            </VStack>
        </>
    )
}

export default Content
