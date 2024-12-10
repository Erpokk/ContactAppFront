import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors.js'

export const selectNameFilter = (state) => state.filters; 

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
); 