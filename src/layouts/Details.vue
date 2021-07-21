<script>
import TravelService from '../services/TravelService'
export default {
    name: 'Details',
    props: ['id','airline'],
    data() {
        return {
            details: null,
        }
    },
    created() {
        TravelService.getPassengerById(this.id)
            .then((res) => {
                this.details = res.data
                console.log(this.details.length === 0)
                if(this.details.length === 0){
                    this.$router.push({
                        name: '404Resource',
                        params: { resource: 'traveler'}
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                if(err.res && err.res.status == 404){
                    this.$router.push({
                        name: '404Resource',
                        params: { resource: 'traveler'}
                    })
                }
            })
    },
}
</script>

<template>
    <router-view :details="details" />
</template>