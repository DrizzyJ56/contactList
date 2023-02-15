import React from "react";
import ContactRow from "./ContactRow";
function ContactList(props) {
  const contacts = props.contact;
  const setContact = props.setContact;

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contacts.map((e) => {
          return <ContactRow key={e.id} contact={e} setContact={setContact} />;
        })}
      </tbody>
    </table>
  );
}
export default ContactList;
