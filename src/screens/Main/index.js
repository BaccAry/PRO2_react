import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users.length === 0 ? 1 : users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const deleteUser = (id) => {
    const filtUsers = users.filter((el) => el.idUser !== id);
    setUsers(filtUsers);
  };

  const sortUsers = (sortValue) => {
    let sortedUsers = users;
    if (typeof users[0][sortValue] === "string") {
      sortedUsers = users.sort((a, b) =>
        a[sortValue].localeCompare(b[sortValue])
      );
    } else if (typeof users[0][sortValue] === "number") {
      sortedUsers = users.sort((a, b) => a[sortValue] - b[sortValue]);
    }
    setUsers(sortedUsers);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          deleteUser={deleteUser}
          sortUsers={sortUsers}
        />
      </div>
    </>
  );
}
