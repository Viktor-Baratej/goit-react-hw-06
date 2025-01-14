import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import s from './Contact.module.css';
const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.item_wrapper}>
      <li className={s.contact_item}>
        <p className={s.contact_info}>
          {contact.name}: {contact.phone}
        </p>
        <button
          className={s.contact_btn}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
