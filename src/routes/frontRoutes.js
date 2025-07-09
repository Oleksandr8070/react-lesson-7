export default {
    pages: {
        home: '/',
        contacts: '/contacts',
        rules: '/rules',
        products: {
        index: '/products',
        add: 'new',
        edit: ':id/edit',
        detail: ':id',
    },
    },
    navigate: {
    products: {
    list: '/products',
    add: '/products/new',
    getDetailLink: (id) => `/products/${id}`,
    getEditLink: (id) => `/products/${id}/edit`,
},
},
}