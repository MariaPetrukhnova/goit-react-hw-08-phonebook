import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Text, Input, Flex } from "@chakra-ui/react";

const Filter = () => {
    const dispatch = useDispatch();

    const onChange = e => {
        const value = e.target.value.toLowerCase();
        dispatch(setFilter(value));
    };

    return (<Flex alignItems='center' gap='2' justifyContent='center'>
        <Text
            fontSize={20}
            fontWeight={400}
            textAlign={'center'}
            color={'#572470'}
            as='i'
        >
            Знайти контакт
        </Text>
        <Input
            size='sm'
            width={200}
            focusBorderColor='pink.400'
            borderColor='violet'
            type='text'
            onChange={onChange}
        />
    </Flex>
    )
};

export default Filter;