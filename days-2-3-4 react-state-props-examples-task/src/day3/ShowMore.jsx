import React, { useState } from "react";

let userData = [
  {
    id: 1,
    name: "hadi",
    age: 23,
    status: "developer",
    education: "PHD from LUMS",
  },
  {
    id: 2,
    name: "hussain",
    age: 23,
    status: "designer",
    education: "PHD",
  },
  {
    id: 3,
    name: "hussain",
    age: 23,
    status: "designer",
    education: "PHD",
  },
  {
    id: 4,
    name: "hussain",
    age: 23,
    status: "designer",
    education: "PHD",
  },
];

const ShowMore = () => {
  const [limit, setLimit] = useState(2);
  const [singleUser, setSingleUser] = useState({});

  const fetchData = (id) => {
    setSingleUser(userData.find((x) => x.id === id));
  };

  return (
    <main>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        User Data :
        {userData.slice(0, limit).map((x) => (
          <p onClick={() => fetchData(x.id)}>{x.name},</p>
        ))}
        <button onClick={() => setLimit(limit + 1)}>show more</button>
      </div>

      {singleUser.name}
    </main>
  );
};

export default ShowMore;
