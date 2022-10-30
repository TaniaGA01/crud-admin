<template>
  <div>
    <template>
      <b-form @show="getEditElementMet()">
        <b-form-group label="Nom du produit" label-for="productName">
          <input class="form-control" id="productName" v-model.lazy="editElement.nom">
        </b-form-group>
        <b-row>
          <b-col col md="4">
            <b-form-group label="Marque" label-for="productBrand">
              <b-form-select id="productBrand" :options="brands" v-model="editElement.marque">
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col col md="4">
            <b-form-group label="Réference" label-for="productReference">
              <b-form-input id="productReference" v-model="editElement.réference"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col col md="4">
            <b-form-group label="Statut" label-for="productStatus">
              <b-form-select id="productStatus" :options="statusProduct" v-model="editElement.statut"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col col md="4">
            <b-form-group label="Stock" label-for="productStock">
              <b-form-input type="number" id="productStock" v-model="editElement.stock"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <footer class="text-right">
        <b-button size="sm" variant="outline-danger" @click="cancelBtn()" >
        Annuler
        </b-button>
        <b-button size="sm" variant="outline-success" @click="sendEditProducts(editElement)">
          Accepter
        </b-button>
      </footer>
    </template>
  </div>
</template>
<script>

import { brands, statusProduct } from '../brands'

export default {
  props:{
    editElement:{}
  },
  data(){
    return {
      brands:brands,
      statusProduct:statusProduct,
      closeModal:this.editModal,
      getEditElement:{}
    }
  },
  created(){
    this.getEditElementMet()

  },
  computed:{

  },
  methods:{
    sendEditProducts(edit){
      this.$emit('editProduct', edit) // editProduct -> methode , edit -> Parametre .... "editProduct" va vers le parent
      // this.$refs['edit-modal'].hide()
      console.log(`waze`, this.editElement)
      this.$emit("clicked", false )
    },
    getEditElementMet(){
      this.getEditElement = Object.assign({}, this.editElement)
      console.log('capture', this.getEditElement)
      console.log('openModal', this.editModal)
    },
    cancelBtn() {
      console.log(JSON.stringify(this.editElement))
      console.log('closeModal',this.editModal)

      this.editElement.nom = this.getEditElement.nom
      this.editElement.marque = this.getEditElement.marque
      this.editElement.réference = this.getEditElement.réference
      this.editElement.stock = this.getEditElement.stock
      this.editElement.statut = this.getEditElement.statut

      this.$emit("clicked", false )

      // this.$refs['edit-modal'].hide()
    },

  }
}
</script>



