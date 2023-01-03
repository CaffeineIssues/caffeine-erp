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
import React, { useEffect, useState } from 'react'
import NewUser from './NewUser'

function UserList() {
    const empresa_id: number = 0
    const [userList, setUserList] = useState([])
    const [newUser, setNewUser] = useState(false)
    const fetchUsers = async (empresa_id: number) => {
        const request = await fetch(
            `http://localhost:4000/user/${empresa_id}`,
            {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const response = await request.json().then(async function (response) {
            setUserList(response.data)
            console.log(userList)
        })
    }
    useEffect(() => {
        fetchUsers(empresa_id)
    }, [])

    const useList = userList.map((user, index) => {
        return (
            <>
                <Tr>
                    <Td>{user['user_id']}</Td>
                    <Td>{user['name']}</Td>
                    <Td>{user['department_description']}</Td>
                    <Td>{user['role_description']}</Td>
                    <Td>{user['company']}</Td>
                    <Td>{user['email']}</Td>
                    <Td>actions</Td>
                </Tr>
            </>
        )
    })
    return (
        <>
            <VStack w="100%" h={900}>
                <Text fontWeight="bold" w="97%" mt="1%">
                    Usuários
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
                        <NewUser />

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
                                <Tbody>{useList}</Tbody>
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

export default UserList
