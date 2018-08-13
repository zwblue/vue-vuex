<template>
  <div>
    <h1>{{userName}}</h1>
    <h1>{{this.$store.state.userId}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userName:'张阳'
    }
  },
  mounted(){
    console.log(this.$store)
  },
}
</script>
