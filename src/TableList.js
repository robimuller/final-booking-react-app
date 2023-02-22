import React from 'react';

function TableList() {
  const tables = [
    { id: 1, name: 'Table 1', capacity: 4 },
    { id: 2, name: 'Table 2', capacity: 2 },
    { id: 3, name: 'Table 3', capacity: 6 },
  ];

  return (
    <div>
      <h2>Available Tables</h2>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>
            <strong>{table.name}</strong> - Capacity: {table.capacity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableList;
