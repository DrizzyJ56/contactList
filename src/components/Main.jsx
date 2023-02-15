import React, { useState } from "react";
import dummyContacts from "../dummyData";

const Main = () => {
  const [contact, setContacts] = useState(dummyContacts);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
              {contact.map((e) => {
              return <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
              </tr>
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
