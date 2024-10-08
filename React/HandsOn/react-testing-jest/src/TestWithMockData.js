import React from "react";
const TestWithMockData = ({ data }) => {
  return (
    <div>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}
            {item.first_name}
            {item.last_name}
            {item.email}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default TestWithMockData;
