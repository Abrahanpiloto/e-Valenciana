import API_CONFIG from "../../config/api";

// Funcion para obtener todos los productos:
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_CONFIG.API_URL}/products?populate=*`);
    if (!response) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

// Funcion para obtener un producto por id, para usar despues:
export const getProductById = async (id) => {
  try {
    const response = await fetch(
      `${API_CONFIG.API_URL}/products/${id}?populate=*`
    );
    if (!response) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener producto:", error);
    throw error;
  }
};
