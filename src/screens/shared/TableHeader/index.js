import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columnsNames, sortUsers }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th onClick={() => sortUsers(c)} key={c}>
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortUsers: PropTypes.func.isRequired,
};

export default TableHeader;
