<template>
    <header class="grid-container shadow-[2px_4px_8px_0_rgba(0,0,0,0.1)]">
        <div class="flex items-center gap-5 lg:gap-4 py-3">
            <div class="shrink-0"> 
                <picture>
                    <source srcset="@/assets/img/logo.svg" media="(min-width:976px)">
                    <source srcset="@/assets/img/logoMobile.svg" media="(min-width:0px)">
                    <img src="@/assets/img/logo.svg" alt="" class="w-[39px] sm:w-[49px] lg:w-auto">
                </picture>    
            </div>
            <button class="sm:flex hidden items-center lg:ml-6 p-2 gap-2 bg-[#70C05B] text-white rounded lg:min-w-[140px] h-10">
                <span class="flex justify-between mx-[2.5px] w-[19px] flex-col h-[13px] ">
                    <span class="bg-white h-[1px] w-full"></span>
                    <span class="bg-white h-[1px] w-full"></span>
                    <span class="bg-white h-[1px] w-full"></span>
                </span>
                <span class="text-center grow max-lg:hidden">Каталог</span> 
            </button>
            <div class="flex p-2 gap-3 grow rounded border border-[#70C05B] items-center">
                <div class="grow">
                    <input type="text" class="w-full p-0 border-none bg-transparent focus:ring-0 focus:outline-transparent pl-2 placeholder:text-[#8F8F8F]" placeholder="Найти товар">
                </div>
                <div class="shrink-0">
                    <img src="@/assets/img/icons/search.svg" alt="" >
                </div>
            </div>
            <div class="flex gap-6 lg:ml-6 max-lg:text-xs max-[560px]:hidden">
                <div class="flex items-center justify-center flex-col gap-2">
                    <div><img src="@/assets/img/icons/heart.svg" alt=""></div>
                    <p>Избранное</p>
                </div>                
                <div class="flex items-center justify-center flex-col gap-2">
                    <div><img src="@/assets/img/icons/package.svg" alt=""></div>
                    <p>Заказы</p>
                </div>                
                <div class="flex items-center justify-center flex-col gap-2">
                    <div><img src="@/assets/img/icons/shopping-cart.svg" alt=""></div>
                    <p>Корзина</p>
                </div>                
            </div>
            <div class="lg:ml-6 shrink-0 hidden sm:block">
                <img src="@/assets/img/avatar.png" alt="">
            </div>
        </div>
   </header>
</template>

<script setup>

</script>

