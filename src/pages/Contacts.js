import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components//Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { Text } from "@chakra-ui/react";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div>
      <Text
        fontWeight={600}
        fontSize={36}
        textAlign={'center'}
        color={'#572470'}
        pt={5}
        pb={5}
      >
        Створи свій довідник контактів
      </Text>
      <ContactForm/>

      <Text
        fontWeight={600}
        fontSize={36}
        textAlign={'center'}
        color={'#572470'}
        pt={5}
        pb={5}
      >
        Мої контакти
      </Text>

      {contacts.length > 1 && (
        <Filter />
      )}

      {isLoading && !error && (
        <p>Завантаження...</p>
      )}
      {contacts.length > 0 ? ( 
        <ContactList />
      ) : (
      <Text
        fontWeight={600}
        fontSize={36}
        textAlign={'center'}
        color={'#572470'}
        pt={5}
        pb={5}
          >У вас поки що немає жодного контакту
      </Text>
      )}
    </div>
  );
}