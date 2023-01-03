import {
    FormControl,
    FormErrorMessage,
    FormLabel,
} from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { useField } from 'formik'
import InputMask from 'react-input-mask'

const TextField = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <FormControl isInvalid={meta.touched && meta.error}>
            <Input as={InputMask} {...field} {...props} />
            <FormErrorMessage color="red">{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField
