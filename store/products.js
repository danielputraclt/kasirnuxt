export const state = () => ({
  categories: [
    {
      id: false,
      title: 'All',
    },
    {
      id: 1,
      title: 'Smartphone',
    },
    {
      id: 2,
      title: 'Camera',
    },
    {
      id: 3,
      title: 'TV',
    },
  ],  
  
  products: [],
      categoryID: 0,
    })

    export const mutations = {
      updateCategoryId(state, categoryID){
        state.categoryID = categoryID
      },
      updateProducts(state, products){
        state.products = products
      }
    }

    export const actions = {
      updateCategoryId({commit}, categoryID){
        commit('updateCategoryId', categoryID)
  
      },
      fetchProducts({commit}){
        return this.$axios.$get('http://localhost:3000/products').then(response => {
          commit('updateProducts', response.products)
        }) 
      }
    }