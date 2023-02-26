<template>
    <main class="grid-container grow items-start auto-rows-max">
		<div class="flex gap-4 items-center text-[12px] text-[#414141] py-7">
			<p class="last:text-[#8F8F8F]">Главная</p>
			<img src="@/assets/img/icons/chevron-right.svg" alt="">
			<p class="last:text-[#8F8F8F]">Каталог</p>
			<img src="@/assets/img/icons/chevron-right.svg" alt="">
			<p class="last:text-[#8F8F8F]">Молоко, сыр, яйцо</p>
		</div>    	
		<div>
			<h2 class="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#414141] mb-8 md:mb-10 lg:mb-14">Каталог</h2>
			<div class="lg:flex gap-6 mb-10 hidden">
				<div class="text-[#606060] px-2 py-1 rounded bg-[#F3F2F1]">Товары нашего производства</div>
				<div class="text-[#606060] px-2 py-1 rounded bg-[#F3F2F1]">Полезное питание</div>
				<div class="text-[#606060] px-2 py-1 rounded bg-[#F3F2F1]">Без ГМО</div>
			</div>
			<div class="flex gap-10 mt-10">
				<div class="flex flex-col grow max-w-[272px] gap-10">
					<div class="text-base text-[#414141] font-bold p-2.5 bg-[#F3F2F1]">Фильтр</div>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<p class="text-base text-black">цена</p>
							<Button color="gray" size="S" class="leading-loose">Очистить</Button>
						</div>
						<div class="flex items-center">
							<div class="flex-1"><Input class="w-full" placeholder="1"/></div>
							<div class="mx-1 h-[1px] w-4 bg-black"></div>
							<div class="flex-1"><Input class="w-full" placeholder="100"/></div>
						</div>
						<div>
							<label class="relative inline-flex items-center cursor-pointer">
	  							<input type="checkbox" value="" class="sr-only peer" checked>
	  							<div class="w-11 h-6 border border-[#E0E0E0] bg-[#F8F8F8] rounded-full peer peer-focus:ring-transparent peer-checked:after:translate-x-full peer-checked:after:border-[rgba(0_0_0_0.04)] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-[rgba(0_0_0_0.04)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-all peer-checked:bg-[#70C05B]"></div>
	  							<span class="ml-2.5 text-base text-[#414141]">Checked toggle</span>
							</label>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
					<div class="flex gap-4 h-fit col-[full]">
						<Button color="secondary">
							Фильтр 4 
							<template #suffix>
								<IconX/>
							</template>							
						</Button>
						<Button color="secondary">
							Цена от 99 до 2599
							<template #suffix>
								<IconX/>
							</template>							
						</Button>
						<Button color="gray">
							Очистить фильтры
							<template #suffix>
								<IconX/>
							</template>							
						</Button>
					</div>
					<div class="flex flex-col rounded shadow-[1px_2px_4px_rgba(0,0,0,0.1)] transition-all duration-500 ease-linear hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] bg-white overflow-hidden group">
                    	<div class="relative">
                    	    <img src="@/assets/img/product/image-4.png" class="w-full object-contain h-40" alt="">
                    	    <div class="p-2.5 bg-[#F3F2F1] hover:bg-[#FCD5BA] transition-colors ease-linear duration-500 cursor-pointer rounded opacity-50 absolute right-2 top-2">
                    	        <img src="@/assets/img/icons/heart.svg" alt="">
                    	    </div>                      
                    	</div>
                    	<div class="flex grow flex-col gap-2 p-2">
                    	    <div class="mb-3 lg:mb-[18px] flex gap-2 justify-between items-end">
                    	        <div>
                    	            <p class="text-sm sm:text-lg font-bold text-[#414141]">44,50 <span class="ml-1">₽</span></p>                                
                    	        </div>
                    	        <div>
                    	            <p class="text-xs sm:text-base text-[#606060] ">44,50 <span class="ml-1">₽</span></p>                              
                    	        </div>                           
                    	    </div>
                    	    <p class="text-xs sm:text-base grow text-[#414141] truncate whitespace-normal line-clamp-3 sm:line-clamp-2 ">Г/Ц Блинчики с мясом вес, Россия</p>
                    	    <div class="flex items-center gap-1">
                    	        <svg aria-hidden="true" class="w-4 h-4 text-[#FF6633]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z"></path></svg>
                    	        <svg aria-hidden="true" class="w-4 h-4 text-[#FF6633]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z"></path></svg>
                    	        <svg aria-hidden="true" class="w-4 h-4 text-[#BFBFBF]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z"></path></svg>
                    	        <svg aria-hidden="true" class="w-4 h-4 text-[#BFBFBF]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z"></path></svg>
                    	        <svg aria-hidden="true" class="w-4 h-4 text-[#BFBFBF]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z"></path></svg>
                    	    </div>
                    	    <Button class="w-full group-hover:outline-[#FF6633] group-hover:bg-[#FF6633] group-hover:text-white" color="secondary" decoration="outline">В корзину</Button>
                    	</div>
                	</div>
					<Button color="gray" class="col-[full] justify-self-center">Показать ещё</Button>
				</div>
			</div>
		</div>
   	</main>
</template>

<script setup>
import  IconX  from "@/components/icons/IconX.vue";
import  Button from "@/components/Button.vue";
import  Input from "@/components/forms/Input.vue";
</script>


   	
    
   	