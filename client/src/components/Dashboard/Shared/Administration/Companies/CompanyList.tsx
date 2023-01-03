import {
    Button,
    Card,
    Heading,
    HStack,
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
import React from 'react'

function CompanyList() {
    return (
        <>
            <VStack w="100%" h={900}>
                <Text fontWeight="bold" w="97%" mt="1%">
                    Empresas
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
                >
                    <VStack w="100%">
                        <HStack mt="2%" width="95%">
                            <Heading
                                alignSelf="start"
                                pl="2%"
                                pt="2%"
                                size="sm"
                                w="100%"
                            ></Heading>
                            <Button colorScheme="red" variant="solid">
                                + Criar Empresa
                            </Button>
                        </HStack>
                        <TableContainer w="100%">
                            <Table variant="simple" colorScheme="black">
                                <TableCaption></TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Id</Th>
                                        <Th>Nome</Th>
                                        <Th>Setor</Th>
                                        <Th>Função</Th>
                                        <Th>Empresa</Th>
                                        <Th>Email</Th>
                                        <Th>Ações</Th>
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
                                        <Td>16:59</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>#02</Td>
                                        <Td>Erro ao cadastrar saida</Td>
                                        <Td>Financeiro</Td>
                                        <Td>Maria Clara Pereira</Td>
                                        <Td>Erro</Td>
                                        <Td>17:25</Td>
                                        <Td>16:59</Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Id</Th>
                                        <Th>Nome</Th>
                                        <Th>Setor</Th>
                                        <Th>Função</Th>
                                        <Th>Empresa</Th>
                                        <Th>Email</Th>
                                        <Th>Ações</Th>
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

export default CompanyList
