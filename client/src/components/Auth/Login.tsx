import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    chakra,
    Heading,
    Image,
    Img,
    Select,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import React, { useContext, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import { AuthPayload } from '../Types/auth/auth'
import { useNavigate } from 'react-router-dom'
import TextField from '../Utils/TextFieldAuth'
import { AccountContext } from '../Contexts/AccountContext'
function Login() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(AccountContext)
    const [error, setError] = useState<string | null>(null)
    return (
        <VStack
            w={{
                base: '90%',
                md: '840px',
            }}
            m="auto"
            justify="center"
            h="100vh"
            spacing="1rem"
        >
            <Heading w="20%">LOGO</Heading>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                w="100%"
                h="50%"
                borderRadius="30px"
                boxShadow="md"
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '40%' }}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .required('Email obrigatório!')
                            .trim(),
                        password: Yup.string()
                            .required('Senha Obrigatória!')
                            .min(6, 'Senha inválida!'),
                    })}
                    onSubmit={(values, actions) => {
                        const vals: AuthPayload = {
                            username: values.username,
                            password: values.password,
                        }
                        console.log(vals)
                        actions.resetForm()
                        fetch('http://localhost:4000/auth/login', {
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
                                if (!res || !res.ok || res.status >= 400) {
                                    return
                                }
                                return res.json()
                            })
                            .then((data) => {
                                if (!data) return
                                setUser({ ...data })
                                if (data.status) {
                                    setError(data.status)
                                } else if (data.loggedIn) {
                                    console.log(data)

                                    navigate('/dashboard')
                                }
                            })
                    }}
                >
                    <Stack w="100%" as={Form}>
                        <CardBody>
                            <VStack>
                                <Heading size="lg">Login</Heading>
                                <Text as="p" color="red">
                                    {error}
                                </Text>

                                <TextField
                                    name="username"
                                    type="email"
                                    placeholder="Email"
                                    onFocus={() => {
                                        setError('')
                                    }}
                                    required
                                />

                                <TextField
                                    name="password"
                                    type="password"
                                    placeholder="Senha"
                                    onFocus={() => {
                                        setError('')
                                    }}
                                    required
                                />
                                <Select>
                                    <option>Helpdesk</option>
                                    <option>Financeiro</option>
                                    <option>Recursos Humanos</option>
                                    <option>Tecnico</option>
                                </Select>
                            </VStack>
                            <ButtonGroup w="100%" mt="15%">
                                <Button
                                    w="100%"
                                    variant="solid"
                                    colorScheme="blue"
                                    type="submit"
                                >
                                    Log In
                                </Button>
                            </ButtonGroup>
                            <Text mt="5%" textAlign="right">
                                <chakra.a href="#">
                                    Esqueci minha senha
                                </chakra.a>
                            </Text>
                        </CardBody>
                    </Stack>
                </Formik>
            </Card>
        </VStack>
    )
}

export default Login
