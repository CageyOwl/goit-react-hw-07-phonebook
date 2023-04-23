import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { removeContact } from 'redux/contactsSlice';


export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const list = filter
    ? contacts.filter(contact => contact.name.match(new RegExp(filter, 'gi')))
    : contacts;

  return (
    <ul onClick={event => dispatch(removeContact(event.target.id))}>
      {list.map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
}
