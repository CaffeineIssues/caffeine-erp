import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    chakra,
    Heading,
    Image,
    Img,
    Input,
    Select,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import Logo from '../../../assets/images/logo.png'
import TextField from '../../Utils/TextFieldAuth'

function Login() {
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
            <Img src={Logo} w="60%" />
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

                <Stack w="100%">
                    <CardBody>
                        <VStack>
                            <Heading size="lg">Login</Heading>
                            <Input placeholder="Email" />
                            <Input placeholder="Senha" />
                            <Select>
                                <option>Helpdesk</option>
                                <option>Financeiro</option>
                                <option>Recursos Humanos</option>
                                <option>Tecnico</option>
                            </Select>
                        </VStack>
                        <ButtonGroup w="100%" mt="15%">
                            <Button w="100%" variant="solid" colorScheme="blue">
                                Log In
                            </Button>
                        </ButtonGroup>
                        <Text mt="5%" textAlign="right">
                            <chakra.a href="#">Esqueci minha senha</chakra.a>
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </VStack>
    )
}

export default Login
