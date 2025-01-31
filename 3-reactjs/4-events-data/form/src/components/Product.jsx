import { useState } from 'react'
import './Product.css'

function Product() {

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('Eletrônicos')
    const [description, setDescription] = useState('')

    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    const [categoryFilter, setCategoryFilter] = useState('Todos')
    const [editingProduct, setEditingProduct] = useState(null)

    const handleNameChange        = (event) => setProductName(event.target.value)
    const handlePriceChange       = (event) => setPrice(event.target.value)
    const handleCategoryChange    = (event) => setCategory(event.target.value)
    const handleDescriptionChange = (event) => setDescription(event.target.value)

    const handleAddProduct = (event) => {
        event.preventDefault()

        if(!productName || !price || !description) {
            setError('Por favor, preencha todos os campos!')
            return
        }

        if(isNaN(price) || Number(price) <= 0){
            setError('O preço deve ser um valor positivo.')
            return
        }

        setError('')

        const newProduct = {
            id: editingProduct ? editingProduct.id : Date.now(),
            name: productName,
            price: parseFloat(price).toFixed(2),
            category,
            description
        }

        if (editingProduct) {
            setProducts(
                products.map((product) => 
                    product.id === editingProduct.id ? newProduct : product
                )
            )
        } else {
            setProducts([...products, newProduct])            
        }

        setEditingProduct(null)
        setDescription('')
        setPrice('')
        setProductName('')
    }

    const handleRemoveProduct = (id) => {
        setProducts(products.filter((products) => products.id !== id))
    }

    const handleEditProduct = (product) => {
        setEditingProduct(product)
        setProductName(product.name)
        setPrice(product.price)
        setCategory(product.category)
        setDescription(product.description)
    }

    const filteredProducts = products.filter(
        (products) => categoryFilter === 'Todos' || products.category === categoryFilter
    )

    return (
        <div>
            <h1>Cadastro de Produto</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleAddProduct}>
                <label>
                    Nome do Produto:
                    <input 
                        type="text"
                        value={productName}
                        onChange={handleNameChange} 
                    />
                </label>
                <br />
                <label>
                    Preço:
                    <input 
                        type="text"
                        value={price}
                        onChange={handlePriceChange} 
                    />
                </label>
                <br />
                <label>
                    Categoria:
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Alimentos">Alimentos</option>
                    </select>
                </label>
                <br />
                <label>
                    Descrição:
                    <textarea                         
                        value={description}
                        onChange={handleDescriptionChange} 
                    ></textarea>
                </label>
                <br />

                <button type='submit'>{editingProduct ? 'Atualizar Produto' : 'Adicionar Produto'}</button>
            </form>

            <h2>Lista de Produtos</h2>
            <label>
                Filtrar por Categoria:
                <select 
                    value={categoryFilter} 
                    onChange={(event) => setCategoryFilter(event.target.value)}
                >
                    <option value="Todos">Todos</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                    <option value="Roupas">Roupas</option>
                    <option value="Alimentos">Alimentos</option>
                </select>
            </label>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price} = {product.category}
                        <p>{product.description}</p>
                        <button onClick={() => handleEditProduct(product)}>Editar</button>
                        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                    </li>
                ))}                                                                                                                                             
            </ul>
        </div>
    )
}

export default Product