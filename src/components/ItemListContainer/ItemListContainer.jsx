import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getByCategory, getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);

    useEffect(() => {
      setLoading(true);

      getProducts()     
            .then((data) => setProducts(data))
            .catch((err) => {
              console.log("Hubo un error:", err)
            setError(true);
            })
            .finally(() => {
                setLoading(false);
    });
  }, [category]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos</p>;

  return (
  <section>
    <ItemList products={products}/>
  </section>

  );


};