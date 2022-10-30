<template>
  <div>
    <b-modal ok-title="Ajouter" @ok="addNewProduct(addElement)" id="add-modal" title="Ajouter un nouveau produit">
      <b-form >
        <b-form-group label="Nom du produit" label-for="productName">
          <b-form-input id="productName" v-model="addElement.nom"></b-form-input>
        </b-form-group>
        <b-row>
          <b-col col md="4">
            <b-form-group label="Marque" label-for="productBrand">
              <b-form-select id="productBrand" v-model="addElement.marque">
                <option>--Marque--</option>
                <option v-for="brand in brands" :key="brand.value" :value="brand.value">{{ brand.text }}</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col col md="4">
            <b-form-group label="Réference" label-for="productReference">
              <b-form-input id="productReference" v-model="addElement.réference"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col col md="4">
                <b-form-group label="Statut" label-for="productStatus">
                  <b-form-select id="productStatus" :options="statusProduct" v-model="addElement.statut"></b-form-select>
                </b-form-group>
              </b-col>
          <b-col col md="4">
            <b-form-group label="Stock" label-for="productStock">
              <b-form-input type="number" id="productStock" v-model="addElement.stock" min="0"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>
<script>

import { brands, statusProduct } from '../brands'

export default {
  props:[
    "addElement"
  ],
  data(){
    return {
      brands:brands,
      statusProduct:statusProduct,
    }
  },
  methods:{
    addNewProduct(add){
      this.$emit('newProduct', add) // newProduct -> methode , edit -> Parametre .... "newProduct" va vers le parent
    }
  }
}
</script>

