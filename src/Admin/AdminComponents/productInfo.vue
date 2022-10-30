<template>
  <div>
    <b-modal ok-title="Modifier" @ok="sendEditProducts(editElement)" @cancel="sendEditProducts(editElement)" id="edit-modal" :title="'Modifier le produit : ' + editElement.nom">
      <b-form >
        <b-form-group label="Nom du produit" label-for="productName">
          <!-- <b-form-input id="productName" :value="editElement.nom" @input="$emit('editElement.nom', $event)"></b-form-input> -->
          <b-form-input id="productName" v-model="editElement.nom"></b-form-input>
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
            <b-form-group label="Stock" label-for="productStock">
              <b-form-input type="number" id="productStock" v-model="editElement.stock"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        </b-form>
    </b-modal>
  </div>
</template>
<script>

import { brands } from '../brands'

export default {
  props:[
    "editElement"
  ],
  data(){
    return {
      brands:brands
    }
  },
  methods:{
    sendEditProducts(edit){
      this.$emit('editProduct', edit) // editProduct -> methode , edit -> Parametre .... "editProduct" va vers le parent
    }
  }
}
</script>
