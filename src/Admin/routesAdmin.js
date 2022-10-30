import Admin from '../Admin/AdminComponents/adminTable.vue'
import ProductInfo from '../Admin/Pages/ProductInfo.vue'

export const Routes = {
  urls:[
    {
      path: '/',
      component: Admin
    },
    {
      name:'app-product-info',
      path: `/productInfo/:id/:nom`,// Ici les deux points sont pour envoyer un ARGUMENT, donc si on met dans l'url une chiffre /3545 il va rester toujour sur l'url /id
      component: ProductInfo
    },
  ]

}


