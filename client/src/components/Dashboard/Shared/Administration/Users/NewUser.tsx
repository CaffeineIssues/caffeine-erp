import {
    Button,
    ButtonGroup,
    chakra,
    Heading,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import TextField from '../../../../Utils/TextField'
import * as Yup from 'yup'
import { NewUserData } from '../../../../Types/users/user'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../../../../Contexts/AccountContext'
import { Account } from '../../../../Types/contexts/account'

interface Props {
    modalStatus: boolean
}

function NewUser() {
    const { user, setUser } = useContext(AccountContext)
    const disclosure = useDisclosure()
    const navigate = useNavigate()
    const [companies, setCompanies] = useState<any[]>()
    const [roles, setRoles] = useState<any[]>([])
    const [departments, setDepartments] = useState<any[]>([])
    const [success, setSuccess] = useState<boolean>(false)

    const fetchFields = async () => {
        const request = await fetch('http://localhost:4000/fields/new-user/0', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const response = await request.json()
        setCompanies(response.company)
        setRoles(response.role)
        setDepartments(response.department)
    }
    useEffect(() => {
        fetchFields()
    }, [])

    const useCompanies = companies?.map((company) => {
        return (
            <>
                <option value={company.company_id}>{company.name}</option>
            </>
        )
    })

    const useDepartments = departments?.map((department) => {
        return (
            <>
                <option value={department.department_id}>
                    {department.department_description}
                </option>
            </>
        )
    })
    const useRoles = roles?.map((role) => {
        return (
            <>
                <option value={role.department_role_id}>
                    {role.role_description}
                </option>
            </>
        )
    })

    return (
        <>
            <Modal
                isOpen={disclosure.isOpen}
                onClose={disclosure.onClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Novo Usuário</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            initialValues={{
                                name: '',
                                department_id: '',
                                role_id: '',
                                company_id: '',
                                email: '',
                                birthdate: '',
                                gender: '',
                            }}
                            onSubmit={(values, actions) => {
                                const vals: NewUserData = {
                                    name: values.name,
                                    department_id: values.department_id,
                                    role_id: values.role_id,
                                    company_id: values.company_id,
                                    email: values.email,
                                    birthdate: values.birthdate,
                                    gender: values.gender,
                                }
                                console.log(vals)

                                fetch('http://localhost:4000/user', {
                                    method: 'POST',
                                    credentials: 'include',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(vals),
                                })
                                    .catch((err) => {
                                        return
                                    })
                                    .then((res) => {
                                        if (
                                            !res ||
                                            !res.ok ||
                                            res.status >= 400
                                        ) {
                                            return
                                        }
                                        return res.json()
                                    })
                                    .then((data) => {
                                        if (!data) return
                                    })
                            }}
                        >
                            {(props) => (
                                <VStack as={Form}>
                                    <TextField
                                        name="name"
                                        type="text"
                                        placeholder="Nome"
                                        required
                                    />
                                    <HStack w="100%">
                                        <Select
                                            name="department_id"
                                            placeholder="Setor"
                                            onChange={(e) => {
                                                props.setFieldValue(
                                                    'department_id',
                                                    e.target.selectedOptions[0].value.toString()
                                                )
                                            }}
                                        >
                                            {useDepartments}
                                        </Select>
                                        <Select
                                            name="role_id"
                                            placeholder="Função"
                                            onChange={(e) => {
                                                props.setFieldValue(
                                                    'role_id',
                                                    e.target.selectedOptions[0].value.toString()
                                                )
                                            }}
                                        >
                                            {useRoles}
                                        </Select>
                                    </HStack>
                                    <Select
                                        name="company_id"
                                        placeholder="Empresa"
                                        onChange={(e) => {
                                            props.setFieldValue(
                                                'company_id',
                                                e.target.selectedOptions[0].value.toString()
                                            )
                                        }}
                                    >
                                        {useCompanies}
                                    </Select>
                                    <TextField
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <HStack w="100%">
                                        <TextField
                                            name="birthdate"
                                            type="date"
                                            placeholder="Data de Nascimento"
                                            required
                                        />
                                        <Select
                                            name="gender"
                                            placeholder="Sexo"
                                            onChange={(e) => {
                                                props.setFieldValue(
                                                    'gender',
                                                    e.target.selectedOptions[0].value.toString()
                                                )
                                            }}
                                        >
                                            <option value="M">Masculino</option>
                                            <option value="F">Feminino</option>
                                        </Select>
                                    </HStack>
                                    <ButtonGroup
                                        w="100%"
                                        justifyContent="right"
                                        pt="5%"
                                        pb="10%"
                                    >
                                        <Button
                                            type="submit"
                                            colorScheme="teal"
                                            w="100%"
                                        >
                                            Criar
                                        </Button>
                                    </ButtonGroup>
                                </VStack>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <HStack mt="2%" width="95%">
                <Heading
                    alignSelf="start"
                    pl="2%"
                    pt="2%"
                    size="sm"
                    w="100%"
                ></Heading>
                <Button
                    colorScheme="red"
                    variant="solid"
                    onClick={() => disclosure.onOpen()}
                >
                    + Criar Usuário
                </Button>
            </HStack>
        </>
    )
}

export default NewUser
