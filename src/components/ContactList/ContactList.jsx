import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactList.module.css';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

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
        <ul className={css.contacts_box}>
            {onFilterChange().map(({ id, name, number }) => (
                <li key={id} className={css.contacts_item}>
                    <span key={id} className={css.contacts_text}>
                        {name}: {number}
                    </span>
                    <button className={css.del_btn} onClick={() => onDeleteContact(id)}>Видалити</button>
                    <button className={css.del_btn} onClick={() => toggleModal(name, number, id)}>Редагувати</button>
                </li>
            ))}
        </ul>
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
