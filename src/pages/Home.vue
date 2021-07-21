<script>
import TravelerCard from '../components/TravelerCard.vue'
import TravelService from '../services/TravelService.js'
import { watchEffect } from '@vue/runtime-core'
export default {
    name:'HomePage',
    components:{ TravelerCard },
    data(){
        return {
            travelers: null
        }
    },
    created(){
        watchEffect(() => {
            TravelService.getPassengers().then(res=>{
                this.travelers = res.data.data
            }).catch(err => console.log(err))
        })
    }
}
</script>
<template>
  <div class="bg-gray-50">
    <div
      class="
        max-w-screen-xl
        px-4
        py-12
        mx-auto
        sm:px-6
        lg:py-16
        lg:px-8
        lg:flex
        lg:items-center
        lg:justify-between
      "
    >
      <h2
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          sm:text-4xl
          sm:leading-10
        "
      >
        Welcome to our Home page 
        <br />
        <span class="text-indigo-600">This is our traveler</span>
      </h2>
    </div>
    <TravelerCard v-for="item in travelers" :key="item._id" :traveler="item" /> 
  </div>
</template>