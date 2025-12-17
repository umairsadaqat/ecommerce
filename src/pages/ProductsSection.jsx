import { useState } from "react";
import AddProductForm from "./AddProductForm";
import "../styles/admin-dashboard.css";

export default function ProductsSection({
  products,
  addProduct,
  deleteProduct,
  updateProduct
}) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", price: "" });

  const startEdit = (index) => {
    setEditIndex(index);
    setEditData({
      name: products[index].name,
      price: products[index].price
    });
  };

  const saveEdit = () => {
    if (!editData.name || !editData.price) return;

    updateProduct(editIndex, {
      ...products[editIndex],
      name: editData.name,
      price: editData.price
    });

    setEditIndex(null);
  };

  return (
    <section>
      <h1>Manage Products</h1>
      <AddProductForm onAdd={addProduct} />

      <div className="product-list1">
        {products.map((product, index) => (
          <div key={index} className="product-card1">

            {/* Image container ensures same size for all images */}
            <div className="product-image-container">
              {product.image && (
                <img src={product.image} alt={product.name} className="product-image1" />
              )}
            </div>

            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  placeholder="Product Name"
                />

                <input
                  type="number"
                  value={editData.price}
                  onChange={(e) =>
                    setEditData({ ...editData, price: e.target.value })
                  }
                  placeholder="Price"
                />

                <div className="action-row">
                  <button className="save-btn" onClick={saveEdit}>Save</button>
                  <button className="cancel-btn" onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p><strong>{product.name}</strong></p>
                <p>Price: {product.price} PKR</p>

                <div className="action-row">
                  <button className="edit-btn" onClick={() => startEdit(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteProduct(index)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
