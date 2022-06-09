<template>
  <div>
    <v-row align="center">
      <v-col cols="10">
        <v-autocomplete
          label="Products"
          placeholder="Start typing to search"
          :search-input.sync="search"
          :loading="isLoading"
          :items="itemsSearch"
          item-text="title"
          item-value="id"
          v-model="selectedSearch"
          return-object
          hide-no-data>
          
          </v-autocomplete>
      </v-col>

      <v-col cols="2">
        <v-menu>
          <template v-slot:activator="{ on: category }">
            <v-btn v-on="category" color="primary"> Category </v-btn>
          </template>

          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(category, index) in categories"
                :key="index"
                :value="category.id"
                :disabled="category.id == categoryID"
                @change="updateCategoryId(category.id)"
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
        <v-card 
        :title="product.title" 
        ripple="true"
        @click="addToCart(product.id)">
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

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: null,
      isLoading: false,
      itemsSearch: [],
      selectedSearch: null,
    }
  },

methods: {
  ...mapActions({
    updateCategoryId: 'products/updateCategoryId',
    addToCart: 'carts/addToCart',
    fetchProducts: 'products/fetchProducts'
  }),
  resetSearchCategory(){
    this.categoryID = false
  }
},
  computed: {
    filteredProducts() {
      console.log(this.selectedSearch)
      if (this.categoryID) {
        return this.products.filter((s) => s.categoryID == this.categoryID)
      }
      else if(this.selectedSearch){
         return this.products.filter((s) => s.title == this.selectedSearch.title)
      }
      return this.products
    },
    ...mapState('products', {
      products: 'products',
      categories: 'categories',
      categoryID: 'categoryID'
    })
  },

  watch: {
    search(val) {
      this.isLoading = true
      setTimeout(() => {
        this.itemsSearch = this.products.filter((e) => {
          this.isLoading = false
          this.resetSearchCategory()
          return e.title
        })
      }, 1000)
    },
  },
  mounted(){
    this.fetchProducts()
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
