import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contactData);
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, contactData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, contactData);
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkAPI) => {
    try {
      console.log(`Deleting Contacts`);
      await axios.delete(`/contacts/${contactID}`);

      return contactID;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export { fetchContacts, addContact, updateContact, deleteContact };
