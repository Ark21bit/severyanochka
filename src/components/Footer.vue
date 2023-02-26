<template>
    <footer class="grid-container bg-[url(@/assets/img/pattern2.svg)] bg-contain bg-[#F9F4E2] mt-10 sm:mt-[60px] lg:mt-20 p-6">
        <div class="flex gap-10 items-center flex-wrap">
            <div><img src="@/assets/img/logoMobile.svg" class="w-16" alt=""></div>
            <div class="flex gap-10 items-center text-[#414141] text-xs flex-wrap">
                <a href="#">О компании</a>
                <a href="#">Контакты</a>
                <a href="#">Вакансии</a>
                <a href="#">Статьи</a>
                <a href="#">Политика обработки персональных данных</a>
                <router-link :to="{name:'sitemap'}">Карта сайта</router-link>
            </div>
            <div class="flex gap-4 items-center ml-auto">
                <a href="#" class="shrink-0"><img src="@/assets/img/social/instagram.svg" alt=""></a>
                <a href="#" class="shrink-0"><img src="@/assets/img/social/vkontakte.svg" alt=""></a>
                <a href="#" class="shrink-0"><img src="@/assets/img/social/facebook.svg" alt=""></a>
                <a href="#" class="shrink-0"><img src="@/assets/img/social/ok.svg" alt=""></a>
            </div>
            <div class="flex gap-2 items-center text-[#414141]">
                <img src="@/assets/img/icons/phone.svg" alt="">
                <a href="#" class="">8 800 777 33 33</a>
            </div>
        </div>
   </footer>
</template>

<script setup>

</script>

