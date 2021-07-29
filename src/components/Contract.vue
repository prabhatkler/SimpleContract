<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- console.log("Enter Account tag") -->
    <h2 class="text-orange">Account: {{account}}</h2>
    <!--console.log("Enter computed value of account") -->
    <div class="mt-3">
      Name <input type="text" class="border-2 border-grey-light" :value="name" @input="updateName">
      Age <input type="text" class="border-2 border-grey-light" :value="age" @input="updateAge" > 
    <button class="bg-blue border-2 border-grey  px-2 py-2 rounded" hover:bg-teal-light @click="setDataHandler">Save</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../store/mutation-types' 
export default {
  name: 'Contract',
  data () {
    return {
      msg: 'Welcome to my first Smart Contract App'
    }
  },
  computed: {
      ...mapGetters(['account','age', 'name'])
  },
  methods:{
    updateName(e){
      this.$store.commit(types.UPDATE_NAME, e.target.value)

    },
    updateAge(e){
      this.$store.commit(types.UPDATE_AGE, e.target.value ? parseInt(e.target.value, 10) : '')
    },
    setDataHandler(){
      if(this.name && this.age){
        this.$store.dispatch('setData');
        console.log('form submitted')
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
