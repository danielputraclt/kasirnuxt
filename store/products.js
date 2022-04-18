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
  
  products: [
        {
          id: 1,
          title: 'Asus Zenfone',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Canon EOS 700d',
          thumbnail: 'canon-eos-700d.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 4,
          title: 'Iphone 6 Silver',
          thumbnail: 'iphone-6-silver.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 3,
          title: 'Canon EOS 750d',
          thumbnail: 'canon-eos-750d.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 5,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 2,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 3,
        },
      ],
      categoryID: 0,
    })

    export const mutations = {
      updateCategoryId(state, categoryID){
        state.categoryID = categoryID
      },
      cetak(state, categoryID){
       alert(categoryID)
      }
    }

    export const actions = {
      updateCategoryId({commit}, categoryID){
        commit('updateCategoryId', categoryID)
        commit('cetak', categoryID)
      }
    }