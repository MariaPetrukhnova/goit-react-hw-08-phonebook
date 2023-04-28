import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'
import { useDispatch } from 'react-redux';
import { correctContact } from 'redux/contacts/contactsOperations';


const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, userName, userNumber, userId }) {
    const [name, setName] = useState(`${userName}`);
    const [number, setNumber] = useState(`${userNumber}`);
    const [id, setId] = useState(`${userId}`);
    const dispatch = useDispatch();



    const handleKeydown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }

    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const onModalChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;    
            case 'id':
                setId(value);
                break;    
            default:
                return;
        };
    }

    const handleModalSubmit = (e) => {
        e.preventDefault();
        dispatch(correctContact({ id, name, number }));
        onClose();
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);

        return () => {
        window.removeEventListener('keydown', handleKeydown);
        };
    });

    return createPortal(
        <div className={css.Overlay} onClick={handleBackDropClick}>
            <form className={css.Modal} onSubmit={handleModalSubmit}>
                <input value={name} name='name' onChange={onModalChange} />
                <input value={number} name='number' onChange={onModalChange}/>
                <button type='submit'>Змінити</button>
            </form>
        </div>,
        modalRoot
    );
}