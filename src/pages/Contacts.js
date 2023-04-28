import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components//Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';

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
      <h1 style={{textAlign: 'center'}}>Телефонна книга</h1>
      <ContactForm/>
      <h2 style={{textAlign: 'center'}}>Мої контакти</h2>
      {contacts.length > 1 && (
        <Filter />
      )}
      {isLoading && !error && (
        <p>Завантаження...</p>
      )}
      {contacts.length > 0 ? ( 
        <ContactList />
      ) : (
          <h2>У вас поки що немає жодного контакту</h2>
      )}
    </div>
  );
}