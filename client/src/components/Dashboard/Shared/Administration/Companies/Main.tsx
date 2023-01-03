import { Box, Flex } from '@chakra-ui/react'
import HelpdeskMenu from '../../../HelpdeskMenu'
import Header from '../../../Header'
import React from 'react'
import CompanyList from './CompanyList'

function Main() {
    return (
        <>
            <Flex>
                <Box w="15%" zIndex="99" position="relative">
                    <HelpdeskMenu />
                </Box>
                <Box w="85%" zIndex="1" position="relative">
                    <Header />
                    <CompanyList />
                </Box>
            </Flex>
        </>
    )
}

export default Main
