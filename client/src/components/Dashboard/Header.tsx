import { ReactNode, useContext } from 'react'
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    AvatarBadge,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Logo from '../../assets/images/logo.png'
import { AccountContext } from '../Contexts/AccountContext'
import { useNavigate } from 'react-router-dom'

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
    >
        {children}
    </Link>
)

export default function Nav() {
    const { user, setUser } = useContext(AccountContext)
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await fetch(`http://localhost:4000/auth/logout`, {
                method: 'GET',
                credentials: 'include',
            })
        } catch (error) {
            console.error(error)
        }
    }
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                boxShadow={'md'}
                px={4}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Box></Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    <Avatar size={'sm'}>
                                        <AvatarBadge
                                            boxSize="1.25em"
                                            bg="green.500"
                                        />
                                    </Avatar>
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar size={'2xl'} />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>
                                            {user.name
                                                ? user.name.split(' ')[0]
                                                : ''}
                                        </p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Perfil</MenuItem>
                                    <MenuItem>Configurações</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            setUser({ loggedIn: false })
                                            handleLogout()
                                            navigate('/')
                                        }}
                                    >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
