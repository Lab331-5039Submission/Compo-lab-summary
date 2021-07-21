<script>
export default {
    name: 'TravelCard',
    props: {
        traveler: {
            type: Object,
            required: true,
        },
    },
    created(){
        console.log(this.traveler)
    }
}
</script>
<template>
    <div
        class="
            max-w-md
            mx-auto
            my-6
            bg-white
            rounded-xl
            shadow-md
            overflow-hidden
            md:max-w-2xl
        "
    >
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img
                    v-if="!Array.isArray(traveler.airline)"
                    class="h-48 w-full object-cover md:w-48"
                    :src="traveler.airline.logo"
                    :alt="traveler.airline.slogan"
                />
                <img
                    v-else
                    class="h-48 w-full object-cover md:w-48"
                    :src="traveler.airline[0].logo"
                    :alt="traveler.airline[0].slogan"
                />
            </div>
            <div class="p-8">
                <div
                    class="
                        uppercase
                        tracking-wide
                        text-sm text-indigo-500
                        font-semibold
                    "
                >
                    {{ traveler.name }}
                </div>
                <a
                    v-if="!Array.isArray(traveler.airline)"
                    href="#"
                    class="
                        block
                        mt-1
                        text-lg
                        leading-tight
                        font-medium
                        text-black
                        hover:underline
                    "
                    >{{ traveler.trips }} on {{ traveler.airline.name }}</a
                >
                <a
                    v-else
                    href="#"
                    class="
                        block
                        mt-1
                        text-lg
                        leading-tight
                        font-medium
                        text-black
                        hover:underline
                    "
                    >{{ traveler.trips }} on {{ traveler.airline[0].name }}</a
                >
            </div>
        </div>
    </div>
</template>
// {
//       "_id": "5f1c59d0fa523c3aa793c0ac",
//       "name": "Janina Alexandra",
//       "trips": 375,
//       "airline": {
//         "id": 3,
//         "name": "Cathay Pacific",
//         "country": "Hong Kong",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Cathay_Pacific_logo.svg/300px-Cathay_Pacific_logo.svg.png",
//         "slogan": "Move Beyond",
//         "head_quaters": "Cathay City, Hong Kong International Airport, Chek Lap Kok, Hong Kong",
//         "website": "www.cathaypacific.com",
//         "established": "1946"
// },