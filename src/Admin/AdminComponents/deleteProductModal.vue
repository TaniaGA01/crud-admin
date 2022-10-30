<template>
  <div>
    <b-modal ok-title="Supprimer" id="delete-modal" @ok="deleteInfoProducts(deleteElement)">
      <div class="text-center">
        <p class="my-4" >Êtes-vous sur de vouloir supprimer le produit :</p>
        <h3>{{ deleteElement.nom }} ?</h3>
      </div>
    </b-modal>
  </div>
</template>
<script>

export default {
  name:'deleteProductModal',
  props: [
    "deleteElement"
  ],
  methods:{
    deleteInfoProducts(edit){
      this.$emit('deleteProduct', edit) // deleteProduct -> methode , edit -> Parametre .... "deleteProduct" va vers le parent
    }
  }
}
</script>

