import React from "react";
import PropTypes from "prop-types";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

export default function Table({
  users,
  setSelectedUser,
  selectedUser,
  deleteUser,
  sortUsers,
}) {
  return (
    <table>
      <TableHeader
        sortUsers={sortUsers}
        columnsNames={["idUser", "firstName", "lastName"]}
      />
      <tbody>
        {users.map((u) => (
          <TableRow
            key={u.idUser}
            user={u}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            deleteUser={deleteUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  sortUsers: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
