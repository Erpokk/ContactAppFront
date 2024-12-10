import { selectFilteredContacts } from "../../redux//filters/selectors.js";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((contact) => (
        <Contact key={contact._id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
