<script>
import NProgress from 'nprogress'
export default {
    inject: ['GStore'],
    methods: {
        edit() {
            this.GStore.flashMessage = 'Traveller\'s data is updating for fight ' + this.GStore.details.trips
            NProgress.start()
            setTimeout(() => {
                this.$router.push({
                    name: 'Home',
                })
                this.GStore.flashMessage = 'Update sucessfully'
            }, 5000)
            setTimeout(() => {
                this.GStore.flashMessage = ''
            }, 7500)
        },
    },
}
</script>

<template>
    <router-view :details="GStore.details" />
        <button
            class="
                flex
                items-center
                max-w-md
                mx-auto
                bg-transparent
                hover:bg-blue-500
                text-blue-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-blue-500
                hover:border-transparent
                rounded
            "
            @click="edit"
        >
            Edit
        </button>
</template>