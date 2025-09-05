import React, { useState, useEffect } from "react";
import { EcommerceCard as ProductCard } from "../components/ProductCard";
import { getProducts } from "../services/productsServices";

const ContainerProductCard = () => {
  // Estados para manejar los productos y la carga:
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funcion para obtener productos de Strapi:
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      console.log("Productos obtenidos:", response);
      setProducts(response.data || []);
    } catch (error) {
      console.error("Error al cargar productos:", err);
      setError("Error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  //Cargar productos cuando el componente se monte:
  useEffect(() => {
    fetchProducts();
  }, []);

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="flex flex-col justify-center min-h-screen items-center">
        <h2 className="text-2xl font-semibold">
          Espere, cargando productos...
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="">
        <h2 className=" text-center mb-5 text-2xl font-semibold mt-8">
          Lo más Vendido
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500">No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default ContainerProductCard;
