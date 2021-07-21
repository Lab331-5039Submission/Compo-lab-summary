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
            })
            .catch((err) => console.log(err))
    },
}
</script>

<template>
    <router-view :details="details" />
</template>