import {
    Button,
    ButtonGroup,
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

interface Props {
    modalStatus: boolean
}

function NewUser() {
    const disclosure = useDisclosure()

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
                                department: '',
                                role: '',
                                company: '',
                                email: '',
                                date: '',
                                gender: '',
                            }}
                            onSubmit={(values, actions) => {
                                const vals: NewUserData = {
                                    name: values.name,
                                    department: values.department,
                                    role: values.role,
                                    company: values.company,
                                    email: values.email,
                                    date: values.date,
                                    gender: values.gender,
                                }
                                console.log(vals)
                                actions.resetForm()
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
                                        console.log(data)
                                        if (data.status) {
                                            //setError(data.status)
                                        } else if (data.loggedIn) {
                                            //console.log(data)
                                            //navigate('/dashboard')
                                        }
                                    })
                            }}
                        >
                            <VStack as={Form}>
                                <TextField
                                    name="name"
                                    type="text"
                                    placeholder="Nome"
                                    required
                                />
                                <HStack w="100%">
                                    <Select
                                        name="department"
                                        placeholder="Setor"
                                    />
                                    <Select name="role" placeholder="Função" />
                                </HStack>
                                <Select name="company" placeholder="Empresa" />
                                <TextField
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                                <HStack w="100%">
                                    <TextField
                                        name="date"
                                        type="date"
                                        placeholder="Data de Nascimento"
                                        required
                                    />
                                    <Select name="gender" placeholder="Sexo" />
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
