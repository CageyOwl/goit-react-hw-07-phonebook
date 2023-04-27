import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/apiStorageActions';
import {
  selectContacts,
  selectLoadingStatus,
  selectFilter,
  selectError,
} from 'redux/selectors';
import ContactListItem from './ContactListItem';
import Loader from 'components/Loader/Loader';


export default function ContactList() {
  const dispatch = useDispatch();
  let contacts = useSelector(selectContacts);
  let loadingStatus = useSelector(selectLoadingStatus);
  let filter = useSelector(selectFilter);
  let error = useSelector(selectError);

  let list = filter
    ? contacts.filter(contact => contact.name.match(new RegExp(filter, 'gi')))
    : contacts;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loadingStatus && !error ? (
        <Loader />
      ) : (
        <ul onClick={event => dispatch(deleteContact(event.target.id))}>
          {list.map(item => (
            <ContactListItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          ))}
        </ul>
      )}
      {error && `Error: ${error}`}
    </>
  );
}
