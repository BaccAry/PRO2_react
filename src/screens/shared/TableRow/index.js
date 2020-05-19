import React from "react";
import PropTypes from "prop-types";

export default function TableRow({
  user,
  setSelectedUser,
  selectedUser,
  deleteUser,
}) {
  return (
    <tr
      style={{
        backgroundColor:
          user.idUser === selectedUser.idUser ? "yellow" : "white",
      }}
      onClick={() => setSelectedUser(user)}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>
        <button onClick={() => deleteUser(user.idUser)}>Delete user</button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
