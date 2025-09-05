import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import API_CONFIG from "../../config/api";

export function EcommerceCard({ product }) {
  const navigate = useNavigate();

  // Funcion para construir la URL completa de la imagen:
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return "https://via.placeholder.com/300x200?text=Sin+Imagen";
    return `${API_CONFIG.BASE_URL}${imageUrl}`;
  };

  // Obtener la primera imagen del array
  const primaryImage = product?.Imagenes?.[0]?.url;

  const handleClickImage = async () => {
    try {
      window.scrollTo(0, 0); //hace que la pag productInfo inicie desde el navbar
      navigate(`/productInfo/${product.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // Si no hay producto, mostrar un componente vacío o placeholder
  if (!product) {
    return <div>Cargando producto...</div>;
  }

  return (
    <Card className="w-64 flex flex-col">
      <CardHeader shadow={false} floated={false} className="h-64">
        <img
          src={getImageUrl(primaryImage)}
          alt={product.Nombre_producto || "Producto"}
          className="h-full w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleClickImage}
        />
      </CardHeader>
      <CardBody className="flex-grow h-32 overflow-hidden">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold">
            {product.Nombre_producto}
          </Typography>
          <Typography color="blue-gray" className="font-bold">
            S./ {product.Precio}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 line-clamp-2"
        >
          {product.Descripcion}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 h-16">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-green-400 hover:text-black focus:scale-105 focus:shadow-none active:scale-100"
        >
          Agregar a la cesta
        </Button>
      </CardFooter>
    </Card>
  );
}
