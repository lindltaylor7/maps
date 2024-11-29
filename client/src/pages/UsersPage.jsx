import { useEffect, useState } from "react";
import { getUsersRequest } from "../api/users";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await getUsersRequest();
    setUsers(res.data);
  };

  return (
    <>
      <h3 className="text-2xl font-semibold">Usuarios registrados</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {users.map((user) => (
          <p key={user._id}>{user}</p>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
