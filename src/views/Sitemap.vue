<template>
    <main class="grow items-start auto-rows-min py-4  grid-container">
        <div class="sitemap gap-2">
            <router-link class="text-3xl flex gap-2" :to="{name:'home'}">Главная <img src="@/assets/img/icons/check.svg" alt=""></router-link>
            <router-link class="text-3xl flex gap-2" :to="{name:'catalog'}">Каталог <img src="@/assets/img/icons/check.svg"></router-link>
            <router-link class="text-3xl flex gap-2" :to="{name:'category'}">Категория</router-link>
        </div>        
    </main>
</template>

<style scoped>
    .sitemap{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
</style>