import { extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

const theme = {
    components: {
        Steps,
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
    },
    fonts: {
        heading: `'Readex Pro', sans-serif`,
        body: `'Readex Pro', sans-serif`,
    },
}

export default extendTheme(theme)
