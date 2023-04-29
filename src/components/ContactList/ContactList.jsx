import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { Grid, GridItem, Button, Flex, ButtonGroup, Spacer, Text } from '@chakra-ui/react'

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filterRequest = useSelector(state => state.filter.filter).toLowerCase();
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState('');


    const onFilterChange = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterRequest));
    };

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    const toggleModal = (name, number, id) => {
        setShowModal(!showModal);
        setName(name);
        setNumber(number);
        setId(id);
    }

    return (<>
        <Grid templateColumns='repeat(2, 5fr)' gap={6} pt={10} pb={10}>
            {onFilterChange().map(({ id, name, number }) => (
                <GridItem w='100%' border='1px' borderColor='gray.200' key={id} p={5}>
                    <Flex>
                        <Text key={id} fontSize='22' color='#572470'>
                        {name}: {number}
                        </Text>
                        <Spacer/>
                        <ButtonGroup gap={1}>
                            <Button colorScheme='purple' variant='outline' onClick={() => toggleModal(name, number, id)}>Редагувати</Button>
                            <Button colorScheme='purple' variant='solid' onClick={() => onDeleteContact(id)}>Видалити</Button>
                    </ButtonGroup>
                </Flex>  
                </GridItem>
            ))}
        </Grid>
        {showModal && <Modal
            onClose={toggleModal}
            userName={name}
            userNumber={number}
            userId={id}
        />}
    </>
    )
};

export default ContactList;
