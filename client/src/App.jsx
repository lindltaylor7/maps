import { useState } from "react";
import Gmap from "./components/Gmap";
import { useForm } from "react-hook-form";
import { createUserRequest } from "./api/users";

const App = () => {
  const { register, handleSubmit, reset } = useForm();

  const [latitude, setLatitude] = useState(0);

  const setValueLatitude = (latitude) => {
    setLatitude(latitude);
  };

  const [longitude, setLongitude] = useState(0);

  const setValueLongitude = (longitude) => {
    setLongitude(longitude);
  };

  const [address, setAddress] = useState("");

  const setValueAddress = (address) => {
    setAddress(address);
  };

  const onSubmit = handleSubmit((data) => {
    data.latitude = latitude;
    data.longitude = longitude;
    data.address = address;
    console.log(data);
    createUser(data);
  });

  const createUser = async (user) => {
    try {
      const res = await createUserRequest(user);
      alert("Registrado correctamente");
      reset();
      setValueLatitude(0);
      setValueLongitude(0);
    } catch (error) {
      alert("Hubo un error, verifique si todos los campos han sido rellenados");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Actualización de Datos 2025</h1>
      <div className="max-w-md w-full flex flex-col items-center">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full rounded p-2 my-2 bg-zinc-300"
          />
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            {...register("age", { required: true })}
            className="w-full rounded p-2 my-2 bg-zinc-300"
          />
          <label htmlFor="birthDate">Cumpleaños</label>
          <input
            type="date"
            {...register("birthDate", { required: true })}
            className="w-full rounded p-2 my-2 bg-zinc-300"
          />
          <label htmlFor="convertionDate">Fecha de Conversión</label>
          <input
            type="date"
            {...register("convertionDate", { required: true })}
            className="w-full rounded p-2 my-2 bg-zinc-300"
          />
          <label htmlFor="membership">Es Bautizado?</label>
          <div>
            <div className="flex items-center mb-4">
              <input
                {...register("baptized")}
                type="radio"
                value={1}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="yes"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Si
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                {...register("baptized")}
                type="radio"
                value={0}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="no"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                No
              </label>
            </div>
          </div>

          <label htmlFor="address">Dirección</label>
          {/* <input
            type="text"
            {...register("address", { required: true })}
            className="w-full rounded p-2 my-2 bg-zinc-300"
          /> */}

          <Gmap
            long={longitude}
            lat={latitude}
            address={address}
            setValueLatitude={setValueLatitude}
            setValueLongitude={setValueLongitude}
            setValueAddress={setValueAddress}
          />

          <label htmlFor="counseling">
            ¿Necesita consejería sobre algún tema?
          </label>
          <div>
            <div className="flex items-center mb-4">
              <input
                {...register("counseling", { required: true })}
                type="radio"
                value={1}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="yes"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Si
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                {...register("counseling", { required: true })}
                type="radio"
                value={0}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="no"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                No
              </label>
            </div>
          </div>

          <label htmlFor="visit">¿Necesita visita pastoral urgente?</label>
          <div>
            <div className="flex items-center mb-4">
              <input
                {...register("visit", { required: true })}
                type="radio"
                value={1}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="yes"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Si
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                {...register("visit", { required: true })}
                type="radio"
                value={0}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="no"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                No
              </label>
            </div>
          </div>

          <label htmlFor="membership">¿Ha llevado la clase de membresía?</label>
          <div>
            <div className="flex items-center mb-4">
              <input
                {...register("membership")}
                type="radio"
                value={1}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="yes"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Si
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                {...register("membership")}
                type="radio"
                value={0}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="no"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md w-full mt-2"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
