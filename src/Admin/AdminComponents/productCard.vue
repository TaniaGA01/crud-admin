<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            {{ productInfo.Nom }}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>

export default {
props:[
    "productInfo"
  ],
}
</script>

