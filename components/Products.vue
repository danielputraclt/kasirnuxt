<template>
  <v-row>
    <v-col v-for="(product, index) in products" cols="2">
      <v-card :title="product.title"
      ripple="true">
        <v-card-action>
          <v-img :src="require(`@/assets/images/products/${product.thumbnail}`)"></v-img>
        </v-card-action>
        <v-card-text align="center" class="product-title">
            {{ product.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default ({
  data() {
    return {
      products: [
        { id : 1 , title : 'Asus Zenfone', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Canon EOS 700d', thumbnail : 'canon-eos-700d.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},
        { id : 2 , title : 'Asus', thumbnail : 'asus-zenfone.png', price : 2000000 , categoryID : 1},        
      ]
    }
  }
})
</script>

<style scoped>
 .product-title {
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
</style>