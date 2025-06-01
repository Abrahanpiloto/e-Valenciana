import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function SimpleRegistrationForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card color="" shadow={true} className="p-6 lg:w-[440px]">
        <Typography variant="h4" color="blue-gray">
          Inicio de Sesión
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ¡Hola! Por favor, introduce tus datos para iniciar tu sesión.
        </Typography>
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-6">
              Tu Email
            </Typography>
            <Input
              size="lg"
              placeholder="nombre@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-6">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6 hover:text-yellow-700" fullWidth>
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
