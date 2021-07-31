<script>
export default {
  inject:['GStore']
}
</script>

<template>
    <div id="msg" role="alert" v-if="GStore.flashMessage">
        <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">Successful</div>
        <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
            <p>{{ GStore.flashMessage }}</p>
        </div>
    </div>
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <ul class="flex">
                <li class="mr-6">
                    <router-link class="text-blue-500 hover:text-blue-800" to="/">Home</router-link>
                </li>
                <li class="mr-6">
                    <router-link class="text-blue-500 hover:text-blue-800" to="/about">About</router-link>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="https://oat431.github.io">Contract me</a>
                </li>
            </ul>
        </div>
    </header>
    <router-view />
</template>

<style scoped>
  @keyframes fade {
  from {
    background :lightgreen 
  } 
  to {
     background: transparent;
  }
}
#msg {
  animation-name: fade;
  animation-duration: 5s;
}
</style>
