import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ProductForms() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:3000/api/v1/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchProducts();
            setName('');
            setDescription('');
            setPrice('');
            setImage(null);
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    return (
        <div className="App">
            <h1>Upload Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </label>
                <button type="submit">Upload</button>
            </form>
            <h2>Product List</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={`http://localhost:3000/${product.imageUrl}`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductForms;


