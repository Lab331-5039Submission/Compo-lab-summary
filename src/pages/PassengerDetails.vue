<script>
import TravelService from '../services/TravelService'
export default {
    name:'PassengerDetail',
    props:['id'],
    data(){
        return {
            details:null
        }
    },
    created(){
        TravelService.getPassengerById(this.id)
        .then(res=>this.details = res.data)
        .catch(err=>console.log(err))
    }
}
</script>

<template>
    <div class="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-5" v-if="details">
        <div id="profile"
            class="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

            <h1 class="text-3xl font-bold pt-8 lg:pt-0">This is Passenger details</h1>

            <div class="p-4 md:p-12 text-center lg:text-left">
                <h1 class="text-3xl font-bold pt-8 lg:pt-0">Name: {{this.details.name}}</h1>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    💻 Trips No. {{this.details.trips}} 
                </p>
                <p v-if="!Array.isArray(details.airline)" class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 By: {{this.details.airline.name}} 
                </p>
                <p v-else class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 By: {{this.details.airline[0].name}} 
                </p>

                <p v-if="!Array.isArray(details.airline)" class="pt-8 text-sm">
                    {{this.details.airline.slogan}} 
                </p>
                <p v-else class="pt-8 text-sm">
                    {{this.details.airline[0].slogan}} 
                </p>
            </div>
        </div>
    </div>
</template>