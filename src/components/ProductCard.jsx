import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function EcommerceCard() {
  const navigate = useNavigate();

  const handleClickImage = async () => {
    try {
      window.scrollTo(0, 0); //hace que la pag productInfo inicie desde el navbar
      navigate("/productInfo");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="w-64">
      <CardHeader shadow={false} floated={false} className="h-40">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleClickImage}
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Agregar a la cesta
        </Button>
      </CardFooter>
    </Card>
  );
}
