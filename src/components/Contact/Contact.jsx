import { IoPersonSharp, IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaHeart, FaRegHeart, FaAddressBook } from "react-icons/fa";
import css from "./Contact.module.css";
import Button from "../Button/Button.jsx";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  updateContact,
} from "../../redux/contacts/operations.js";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleFav = () => {
    dispatch(
      updateContact({
        contactId: contact._id,
        contactData: { isFavorite: !contact.isFavorite },
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact._id));
  };

  return (
    <li className={css.wrapper}>
      <div className={css.infoWrapper}>
        <div className={css.nameWrap}>
          <div className={css.name}>
            <IoPersonSharp size="15" />
            <p>{contact.name}</p>
          </div>
          <p>
            {contact.isFavorite ? (
              <FaHeart size="25" color="red" onClick={handleFav} />
            ) : (
              <FaRegHeart size="25" onClick={handleFav} />
            )}
          </p>
        </div>
        <div className={css.info}>
          <FaPhoneAlt size="15" />
          <p className={css.phone}>{contact.phoneNumber}</p>
        </div>
        {contact.email && (
          <div className={css.info}>
            <IoMail />
            <p>{contact.email}</p>
          </div>
        )}
        <div className={css.info}></div>
        <div className={css.info}>
          <FaAddressBook />
          <p>
            {contact.contactType.charAt(0).toUpperCase() +
              contact.contactType.slice(1)}
          </p>
        </div>
      </div>
      <Button id={contact._id} onClick={() => handleDelete(contact._id)}>
        Delete
      </Button>
    </li>
  );
};

export default Contact;
