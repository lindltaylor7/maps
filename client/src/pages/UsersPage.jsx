import { useEffect, useState } from "react";
import { getUsersRequest } from "../api/users";
import CardUser from "../components/CardUser";

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
          <CardUser
            key={user._id}
            user={user}
            setUsers={setUsers}
            users={users}
          />
        ))}
      </div>
    </>
  );
};

export default UsersPage;
