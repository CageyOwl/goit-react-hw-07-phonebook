import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './app.module.css';


export function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
