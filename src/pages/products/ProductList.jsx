import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import apiRoutes from '../../api/apiRoutes';
import frontRoutes from '../../routes/frontRoutes';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
        try {
            setIsLoading(true);
            const res = await fetch(apiRoutes.productsList);
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
        }

        fetchData();
    }, []);

    if (isLoading) return <div className='products__container'>Завантаження...</div>;
    if (error) return <div className='products__container'>Помилка завантаження</div>;

    return (
        <div 
            className='products__container'
        >
        <h1
            className='title'
        >Список продуктів</h1>
        <div className="displayFlex flexWrap gap30">
            {products.map((prod) => (
                <div key={prod.id}>
                    <Link >
                        <img
                            src={prod.imageUrl}
                            alt={prod.name}
                            className="img-150"
                        />
                        <h3>{prod.name}</h3>
                        <p>{prod.price} ₴</p>
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ProductList;
