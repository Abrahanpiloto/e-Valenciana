import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SimpleRegistrationForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Funcion para alternar la visibilidad de la contraseña:
  const togglePassVisibility = () => setShowPassword(!showPassword);

  /*
   * React Hook Form es una biblioteca para manejar formularios en React que:
   
   * - Mejora el rendimiento evitando re-renders innecesarios
   * - Proporciona validación de campos integrada
   * - Maneja el estado del formulario de forma eficiente
   * ---Configuración de React Hook Form:---
   - register: función para registrar campos del formulario
   - handleSubmit: función que maneja la validación antes de enviar
   - errors: objeto que contiene errores de validación
   - defaultValues: valores iniciales del formulario
   */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userCredential) {
        toast.success("¡Inicio de sesión exitoso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => navigate("/"),
        });
      }
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("Usuario no registrado. Por favor regístrese primero.");
          setError("Este email no está registrado");
          break;
        case "auth/wrong-password":
          toast.error("Contraseña incorrecta");
          setError("Contraseña incorrecta");
          break;
        case "auth/invalid-email":
          setError("Email inválido");
          break;
        default:
          setError("Error al iniciar sesión: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <Card color="white" shadow={true} className="p-6 lg:w-[440px]">
        <Typography variant="h4" color="blue-gray">
          Inicio de Sesión
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ¡Hola! Por favor, introduce tus datos para iniciar tu sesión.
        </Typography>
        <form
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && (
            <Typography color="red" className="mb-4 text-center">
              {error}
            </Typography>
          )}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-6">
              Tu Email
            </Typography>
            <Input
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              size="lg"
              placeholder="nombre@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && (
              <Typography color="red" className="text-xs">
                {errors.email.message}
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-6">
              Contraseña
            </Typography>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "La contraseña es requerida",
                })}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <button
                type="button"
                onClick={togglePassVisibility}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <Typography color="red" className="text-xs">
                {errors.password.message}
              </Typography>
            )}
          </div>

          <Button
            type="submit"
            className="mt-6 hover:text-yellow-700"
            fullWidth
          >
            iniciar sesion
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            No estoy registrado{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Registrarme
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
