<template>
  <b-container class="mt-5">
    <TableTitle></TableTitle>
    <b-table striped :items="items" :fields="fields" class="text-center mt-5">
      <template #cell(disponible)="row">
        <span class="badge" :class="getBadge(row.item.statut)">{{ getText(row.item.statut) }}</span>
      </template>
      <template #cell(actions)="row">
        <b-button-group>
          <b-button id="editButton" variant="outline-primary"  @click="editButton(row.item)">
            <font-awesome-icon icon="edit" />
            </b-button>
            <b-link :to="{ name:'app-product-info', params:{id:row.item.id, nom:row.item.nom}}">
          <b-button id="displayBtn" variant="outline-secondary">
            <font-awesome-icon icon="eye" />
            </b-button>
            </b-link>
          <b-button id="deleteButton" variant="outline-danger" v-b-modal.delete-modal @click="deleteButton(row.item)"><font-awesome-icon icon="trash"/></b-button>
        </b-button-group>
      </template>
    </b-table>
    <div class="text-center">
      <b-button id="addButton" variant="outline-success" v-b-modal.add-modal><font-awesome-icon icon="plus-circle" /></b-button>
    </div>
    <b-modal ok-title="Modifier" v-model="editModal" :title="'Modifier le produit : ' + editElement.nom" hide-footer   >
      <editProductModal :editElement="editElement" @editProduct="newEditProduct"  @clicked="closeEditModalFunc"/> <!-- editElement -> on passe les infos "row.item" au composant du Modal ///  @editProduct vient de l`emit de l`enfant-->
    </b-modal>

    <addProductModal :addElement="addElement" @newProduct="addNewProduct" />
    <deleteProductModal :deleteElement="deleteElement" @deleteProduct="deleteCurrentProduct"/>
  </b-container>
</template>

<script>

import TableTitle from '../AdminComponents/adminHeader.vue'
import EditProductModal from '../AdminComponents/editProductModal.vue'
import AddProductModal from '../AdminComponents/addProductModal.vue'
import DeleteProductModal from '../AdminComponents/deleteProductModal.vue'
import { Products } from '../products.js'
import { statusProduct } from '../brands'



// import { bus } from '../../main.js'

export default {
  name:'adminTable',
  mixins: [Products],
  components:{ TableTitle, EditProductModal, AddProductModal, DeleteProductModal },
  data(){
    return{
      editModal: false,
      items:Products,
      statusProduct:statusProduct,
      fields: [`id`,{key: `nom`, sortable: true}, `marque`, `réference`, `stock`, `disponible`, `actions`],
      editElement: {},
      addElement: {},
      deleteElement: {},
    }
  },
  created(){
    this.increasedid()
    this.closeEditModalFunc()
  },
  computed:{

  },
  methods:{
    increasedid(){
      for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      item.id = i + 1
      }
    },
    editButton(data){
      this.editElement = data
      this.editModal = true
    },
    newEditProduct(data){ // newEditProduct vient du modal plus haut et data corresponde à "editProduct" qui vient de la méthod de l`enfant
      console.log(`lolo`, data)
    },
    addNewProduct(newProduct){
        this.items.push(newProduct)
        for (let i = 0; i < this.items.length; i++) {
          let item = this.items[i]
          item.id = i + 1
        }
        this.addElement = {}
    },
    deleteButton(data){
      this.deleteElement = data
    },
    deleteCurrentProduct(data){
      const indexProd = this.items.indexOf(data)
      if(indexProd > -1){
        this.items.splice(indexProd, 1);
      }
    },
    getBadge(data){
      const response = this.statusProduct.find(el => el.value == data)
      return response.badge
    },
    getText(data){
      const response = this.statusProduct.find(el => el.value == data)
      return response.text
    },
    closeEditModalFunc(data){
      this.editModal = data
      console.log('hey', data)
    }
    // infoButton(data){
    //   bus.$emit('sendPInfo', data) //  on envoie les infos du produit vers la page produit à travers la methode SendPInfo et le param data
    // }
  }
}
</script>

