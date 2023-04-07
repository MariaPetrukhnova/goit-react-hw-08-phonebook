import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { getContacts } from './contactsSlice';


export default function App() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Phonebook</h1>
      <ContactForm/>
      <h2 style={{textAlign: 'center'}}>My contacts</h2>
      {contacts.length > 1 && (
        <Filter />
      )}
      {contacts.length > 0 ? ( 
        <ContactList />
      ) : (
          <h2>There are no contacts yet</h2>
      )}
    </div>
  );
}