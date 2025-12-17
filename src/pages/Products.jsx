import { useState, useEffect } from "react";
import "../styles/products.css";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

export default function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Initial products array (use imported images)
    const initialProducts = [
      { id: 1, name: "Tapal Chai Classic", price: 600, image: img1 },
      { id: 2, name: "Tapal Chai Gold", price: 400, image: img2 },
      { id: 3, name: "Tapal Chai Green Tea", price: 350, image: img3 },
    ];

    // Check localStorage for saved products (only names, prices, ids)
    const savedProducts = JSON.parse(localStorage.getItem("products"));

    if (savedProducts && savedProducts.length > 0) {
      // Map savedProducts to include images again
      const productsWithImages = savedProducts.map((p) => {
        if (p.id === 1) return { ...p, image: img1 };
        if (p.id === 2) return { ...p, image: img2 };
        if (p.id === 3) return { ...p, image: img3 };
        return p;
      });
      setProducts(productsWithImages);
    } else {
      setProducts(initialProducts);
      // Save only id, name, price (not image) to localStorage
      localStorage.setItem(
        "products",
        JSON.stringify(initialProducts.map(({ id, name, price }) => ({ id, name, price })))
      );
    }
  }, []);

  return (
    <section id="products" className="products-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>Price: {product.price} PKR</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
