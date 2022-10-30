<template>
  <b-container class="mt-5">
    <b-row align-v="center" align-h="center">
      <b-col col lg="5">
        <b-card no-body class="overflow-hidden" >
          <b-row no-gutters>
            <b-col md="12">
              <b-card-img :src="urlImg" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
            <b-col md="12">
              <b-card-body>
                <b-card-text>
                  <h1>{{ productAllInfo.nom }}</h1>
                  <h2>{{ productAllInfo.marque }}</h2>
                  <h3>{{ productAllInfo.réference }}</h3>
                  <h3>{{ productAllInfo.stock }}</h3>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
// import { bus } from '../../main.js'
import { Products } from '../products.js'

export default {
  name:'productInfo',
  data(){
    return{
      items:Products,
      productAllInfo:[],
      urlImg:``,
      productId: this.$route.params.id,

    }
  },
  created(){
    // this.getProdInfo()

  },
  mounted(){
    this.getPhoto()
    this.allInfos()
  },
  methods:{
    // getProdInfo(){
    //   bus.$on('sendPInfo', (data) => {
    //     this.productAllInfo = data
    //   })
    // },
    getPhoto(){
      const id = this.productId
      const url = `https://picsum.photos/200?random=` + id
      this.urlImg = url
      console.log(`img`, id)
    },
    allInfos(){
      this.productAllInfo = this.items.find(el => el.id == this.productId),
      console.log(`mimi`, this.productAllInfo)
      console.log(`this.productId`, this.productId)
      console.log(`this.items`, this.items)
    }
  }
}
</script>

