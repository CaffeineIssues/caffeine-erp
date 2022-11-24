import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from './Header'
import HelpdeskMenu from './HelpdeskMenu'

function Main() {
    const [module, setModule] = useState<string>('helpdesk')
    return (
        <>
            <Flex>
                <Box w="15%" zIndex="99" position="relative">
                    <HelpdeskMenu props={module} />
                </Box>
                <Box w="85%" zIndex="1" position="relative">
                    <Header />
                </Box>
            </Flex>
        </>
    )
}

export default Main
