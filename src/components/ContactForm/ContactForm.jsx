import css from './ContactForm.module.css';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);


    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };
    
    const reset = () => {
        setName('');
        setNumber('');
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return
        } else {
            dispatch(addContact({id: nanoid(), name, number}))
        } 
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={css.inputs_bar}>
                <label className={css.contacts_label}> Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                    className={css.contacts_input}
                />  
                </label>
                <label className={css.contacts_label}> Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    className={css.contacts_input}
                    />
                </label>
            </div>
            <button type="submit" className={css.contacts_btn}>Add contact</button>
        </form>
    );
};
