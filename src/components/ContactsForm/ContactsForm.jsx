import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import s from './ContactsForm.module.css';

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (name && number) {
      dispatch(addContact({ id: Date.now().toString(), name, number }));
      form.reset();
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <form className={s.form_container} onSubmit={handleSubmit}>
      <input className={s.input} name="name" placeholder="Name" required />
      <input className={s.input} name="number" placeholder="Number" required />
      <button className={s.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
