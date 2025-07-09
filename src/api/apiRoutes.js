const BASE_URL = 'https://api-products-vwp0.onrender.com/api/products';

export default {
    productsList: `${BASE_URL}`,              
    addProduct: `${BASE_URL}`,                
    getUpdateProductLink: (id) => `${BASE_URL}/${id}`, 
    getProductById: (id) => `${BASE_URL}/${id}`,       
    getDeleteProductLink: (id) => `${BASE_URL}/${id}`, 
}
