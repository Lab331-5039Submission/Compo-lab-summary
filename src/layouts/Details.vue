<script>
export default {
    inject: ['GStore'],
    methods: {
        edit() {
            this.GStore.flashMessage = 'Traveller has been update for fight ' + this.GStore.details.trips
            setTimeout(() => {
                this.GStore.flashMessage = ''
                this.$router.push({
                    name: 'Home',
                })
            }, 5000)
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