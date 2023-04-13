import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Phonebook</h1>
      <ContactForm/>
      <h2 style={{textAlign: 'center'}}>My contacts</h2>
      {contacts.length > 1 && (
        <Filter />
      )}
      {isLoading && !error && (
        <p>Loading...</p>
      )}
      {contacts.length > 0 ? ( 
        <ContactList />
      ) : (
          <h2>There are no contacts yet</h2>
      )}
    </div>
  );
}

