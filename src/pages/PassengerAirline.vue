<script>
export default {
    props:['details'],
}
</script>

<template>
    <div class="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-5" v-if="details">
        <div id="profile"
            class="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

            <h1 class="text-3xl font-bold pt-8 lg:pt-0">This is airline details</h1>

            <div class="p-4 md:p-12 text-center lg:text-left" v-if="!Array.isArray(details.airline)">
                <h1 class="text-3xl font-bold pt-8 lg:pt-0">Name: {{this.details.airline.name}}</h1>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    💻 Own By : {{this.details.airline.country}}  
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 website: <a :href="this.details.airline.website">{{this.details.airline.website}}</a>  
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 head_quaters: {{this.details.airline.head_quaters}}  
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 established: {{this.details.airline.established}}  
                </p>
                <p class="pt-8 text-sm">
                    {{this.details.airline.slogan}} 
                </p>
            </div>
            
            <div class="p-4 md:p-12 text-center lg:text-left" v-else>
                <h1 class="text-3xl font-bold pt-8 lg:pt-0">Name: {{this.details.airline[0].name}}</h1>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    💻 Own By : {{this.details.airline[0].country}}  
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 website: <a :href="this.details.airline[0].website">{{this.details.airline[0].website}}</a>  
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 head_quaters: {{this.details.airline[0].head_quaters}}  
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    📚 established: {{this.details.airline[0].established}}  
                </p>
                <p class="pt-8 text-sm">
                    {{this.details.airline[0].slogan}} 
                </p>
            </div>
        </div>
    </div>
</template>