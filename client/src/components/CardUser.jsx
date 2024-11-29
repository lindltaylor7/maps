import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
import { deleteUsersRequest } from "../api/users";

const CardUser = ({ user, setUsers, users }) => {
  const deleteUser = (id) => {
    if (confirm("Estas seguro de eliminar este usuario?")) {
      deleteUsersRequest(id);
      setUsers(users.filter((user) => user._id !== id));
    }
  };

  return (
    <div className="bg-blue-700 text-white rounded-md p-3">
      <h3 className="text-xl font-bold">Nombre: {user.name}</h3>
      <h4 className="text-xl font-bold">Edad: {user.age}</h4>
      <p>Cumpleaños: {dayjs(user.birthDate).utc().format("DD/MM/YYYY")}</p>
      <p>Direccion: {user.address}</p>
      <div className="flex">
        <button
          className="bg-blue-600 text-white p-2 rounded"
          onClick={() => deleteUser(user._id)}
        >
          Eliminar
        </button>
        <a
          className="bg-blue-600 text-white p-2 rounded mx-2"
          href={`http://maps.google.com/maps?q=${user.latitude.$numberDecimal},${user.longitude.$numberDecimal}`}
        >
          Maps
        </a>
      </div>
    </div>
  );
};

export default CardUser;
