import { useState } from "react";

export const ItemListContainer = () => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
         fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log("Hubo un error:", err))
            .finally(() => {
                setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
  <section>
    <ItemList products={products}/>
  </section>

  );


};