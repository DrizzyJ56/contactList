import React, { useEffect, useState } from "react";
import { ContactList, ContactRow, SingleContact } from "./";

const Main = () => {
  const [contact, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({})
  const BASE_URL = 'http://jsonplace-univclone.herokuapp.com/users'
  const getContacts = async ()=>{
    try {
      let response = await fetch(BASE_URL)
      let data = await response.json()
      setContacts(data)
    } catch (error) {
      console.err(error)
    }
  }
  const selectContact = async (contactId)=>{
    try {
      let response = await fetch(`${BASE_URL}/${contactId}`)
      let data = await response.json()
      setSelectedContact(data)
    } catch (error) {
      console.err(error)
    }
  }

  useEffect(()=>{
    getContacts()
  },[])

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {
          selectedContact.id ? <SingleContact selectedContact={selectedContact} /> : <ContactList contact={contact} selectContact={selectContact}  />
        }
      </div>
    </div>
  );
};

export default Main;
