import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import InputMask from "react-input-mask";

const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={meta.touched && meta.error}>
			<FormLabel>{label}</FormLabel>
			<Input as={InputMask} {...field} {...props} />
			<FormErrorMessage color="white">{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default TextField;
