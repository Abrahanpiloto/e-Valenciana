import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { registerUser } from "../firebase/firebaseConfig";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputStyles = {
  height: "25px",
  padding: "0.8rem",
};

export default function SimpleRegistrationForm() {
  const navigate = useNavigate();
  // Estados para los datos del formulario, usando la libreria de validaciones useForm:

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const [error, setError] = useState("");
  const notify = () => toast("Wow so easy !");
  // Funcion para manejar el envio del formulario:
  const onSubmit = async (data) => {
    try {
      const userCredential = await registerUser(data.email, data.password);
      if (userCredential) {
        // Limpia el formulario:
        reset();
        // Limpia cualquier error previo:
        setError("");
        toast.success("¡Usuario registrado exitosamente!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => navigate("/"),
        });
        console.log("Usuario registrado exitosamente:", userCredential.user);
      }

      // Agregar la lógica de redirección después del registro exitoso:
    } catch (error) {
      toast.error("Error al registrar usuario", {
        position: "top-right",
        autoClose: 3000,
      });
      // Manejo específico de errores de Firebase
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Este email ya está registrado");
          break;
        case "auth/invalid-email":
          setError("Email inválido");
          break;
        case "auth/operation-not-allowed":
          setError("Operación no permitida");
          break;
        case "auth/weak-password":
          setError("La contraseña debe tener al menos 6 caracteres");
          break;
        default:
          setError("Error al crear la cuenta: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <Card color="white" shadow={true} className="p-6 lg:w-[440px]">
        <Typography variant="h5" color="blue-gray">
          Registro
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ¡Un placer conocerte! Por favor, introduce tus datos para registrarte.
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
          <div className="mb-1 flex flex-col gap-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-sm -mb-4"
            >
              Tu Nombre y Apellido
            </Typography>
            <Input
              {...register("name", {
                required: "El nombre es requerido",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
              })}
              style={inputStyles}
              placeholder="nombre"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-90"
              containerProps={{
                className: "min-h-[35px] h-[35px]",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.name && (
              <Typography color="red" className="text-xs">
                {errors.name.message}
              </Typography>
            )}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-sm"
            >
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
              style={inputStyles}
              placeholder="nombre@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              containerProps={{
                className: "min-h-[35px] h-[35px]",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && (
              <Typography color="red" className="text-xs">
                {errors.email.message}
              </Typography>
            )}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-sm"
            >
              Contraseña
            </Typography>
            <Input
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&)",
                },
              })}
              style={inputStyles}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              containerProps={{
                className: "min-h-[35px] h-[35px]",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.password && (
              <Typography color="red" className="text-xs">
                {errors.password.message}
              </Typography>
            )}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-sm"
            >
              Repite la contraseña
            </Typography>
            <Input
              type="password"
              {...register("confirmPassword", {
                required: "Debe repetir la contraseña",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
              style={inputStyles}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              containerProps={{
                className: "min-h-[35px] h-[35px]",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.confirmPassword && (
              <Typography color="red" className="text-xs">
                {errors.confirmPassword.message}
              </Typography>
            )}
          </div>
          <Checkbox
            {...register("terms", {
              required: "Debe aceptar los términos y condiciones",
            })}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Acepto los
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Términos y Condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {errors.terms && (
            <Typography color="red" className="text-xs mt-1">
              {errors.terms.message}
            </Typography>
          )}
          <Button
            type="submit"
            className="mt-6 hover:text-yellow-700"
            fullWidth
          >
            registrar
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Iniciar Sesión
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
