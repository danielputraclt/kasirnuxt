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
          id: 3,
          title: 'Iphone 6 Silver',
          thumbnail: 'iphone-6-silver.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 4,
          title: 'Canon EOS 750d',
          thumbnail: 'canon-eos-750d.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 5,
          title: 'Lenovo A7000',
          thumbnail: 'Lenovo-A7000.png',
          price: 1700000,
          categoryID: 1,
        },
        {
          id: 6,
          title: 'LG 32" LED TV 32LF550A',
          thumbnail: 'lg-32-led-tv-32LF550A.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 7,
          title: 'LG LED 32" 32LF520A',
          thumbnail: 'lg-led-tv32-32LF520A.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 8,
          title: 'Mi 4i',
          thumbnail: 'mi-4i.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 9,
          title: 'Nikon D3200',
          thumbnail: 'nikon-d3200.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 10,
          title: 'Nikon 5200',
          thumbnail: 'nikon-d5200.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 11,
          title: 'Samsung Galaxy A3',
          thumbnail: 'samsung-galaxy-A3.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 12,
          title: 'Samsung Galaxy A8',
          thumbnail: 'samsung-galaxy-A8.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 13,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 1,
        },
        {
          id: 14,
          title: 'Asus',
          thumbnail: 'asus-zenfone.png',
          price: 2000000,
          categoryID: 2,
        },
        {
          id: 15,
          title: 'ID 3',
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