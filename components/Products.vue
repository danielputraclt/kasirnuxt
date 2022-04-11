<template>
  <div>
    <v-row>
      <v-col cols="10">
        <v-autocomplete
          label="Products"
          placeholder="Start typing to search"
          :search-input.sync="search"
          :loading="isLoading"
          :items="itemsSearch"
          item-text="title"
          item-value="id">
          <option value=""></option>
          </v-autocomplete>
      </v-col>

      <v-col cols="2">
        <v-menu>
          <template v-slot:activator="{ on: category }">
            <v-btn v-on="category" color="primary"> Category </v-btn>
          </template>

          <v-list>
            <v-list-item-group v-model="categoryID">
              <v-list-item
                v-for="(category, index) in categories"
                :key="index"
                :value="category.id"
                :disabled="category.id == categoryID"
              >
                <v-list-item-title>
                  {{ category.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(product, index) in filteredProducts" cols="2" :key="index">
        <v-card :title="product.title" ripple="true">
          <v-card-action>
            <v-img
              :src="require(`@/assets/images/products/${product.thumbnail}`)"
            ></v-img>
          </v-card-action>
          <v-card-text align="center" class="product-title">
            {{ product.title }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryID: false,
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
          id: 4,
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
      search: null,
      isLoading: false,
      itemsSearch: [],
    }
  },

  computed: {
    filteredProducts() {
      if (this.categoryID) {
        return this.products.filter((s) => s.categoryID == this.categoryID)
      }
      return this.products
    },
  },

  watch: {
    search(val) {
      console.log(val)
      this.isLoading = true
      setTimeout(() => {
        this.itemsSearch = this.products.filter((e) => {
          this.isLoading = false
          return e.title
        })
      }, 1000)
    },
  },
}
</script>

<style scoped>
.product-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
