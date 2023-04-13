import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';
import { selectContacts } from 'redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filterRequest = useSelector(state => state.filter.filter).toLowerCase();

    const onFilterChange = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterRequest));
    };

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.contacts_box}>
            {onFilterChange().map(({ id, name, number }) => (
                <li key={id} className={css.contacts_item}>
                    <span key={id} className={css.contacts_text}>
                        {name}: {number}
                    </span>
                    <button className={css.del_btn} onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
};

export default ContactList;
