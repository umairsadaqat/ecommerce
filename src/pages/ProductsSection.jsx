import AddProductForm from "./AddProductForm";

export default function ProductsSection({ products, addProduct, deleteProduct }) {
  return (
    <section>
      <h1>Manage Products</h1>

      <AddProductForm onAdd={addProduct} />

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            {product.image && <img src={product.image} alt={product.name} className="product-image" />}
            <p><strong>{product.name}</strong></p>
            <p>Price: {product.price} PKR</p>
            <button className="delete-btn" onClick={() => deleteProduct(index)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}
