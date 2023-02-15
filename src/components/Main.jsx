import React, { useState } from "react";
import dummyContacts from "../dummyData";
import { ContactList, ContactRow } from "./";

const Main = () => {
  const [contact, setContacts] = useState(dummyContacts);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contact={contact} setContacts={setContacts} />
      </div>
    </div>
  );
};

export default Main;
