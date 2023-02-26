<template>
    <button :class="buttonClass">
        <slot name="prefix"/>

        <slot/>
        <slot name="suffix"/>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(
    {
        color: { type: String, default:"primary" },
        size: { type: String, default:"M" },
        hover: { type: Boolean, default: true },         
        decoration: { type: String, default: "default" }  
    }
)

const buttonColorClasses = {
  default: {
    primary: 'bg-[#FF6633] text-white',    
    secondary: 'bg-[#70C05B] text-white',    
    gray: 'bg-[#F3F2F1] text-[#606060]',    
    error: 'bg-[#D80000] text-[#F2F2F2]',    
  },
  hover: {
    primary: 'hover:shadow-[4px_8px_16px_0_rgba(255,102,51,1)] ',    
    secondary: 'hover:shadow-[4px_8px_16px_0_rgba(112,192,91,.2)] ',    
    gray: 'hover:shadow-[4px_8px_16px_0_rgba(0,0,0,.1)] ',  
    error: 'hover:shadow-[4px_8px_16px_0_rgba(216,0,0,.2)] ',     
  },
}

const buttonOutlineColorClasses = {
  default: {
    primary: 'outline outline-1 -outline-offset-1 outline-[#70C05B] text-[#FF6633]',    
    secondary: 'outline outline-1 -outline-offset-1 outline-[#70C05B] text-[#70C05B]',    
    gray: 'outline outline-1 -outline-offset-1 outline-[#70C05B] text-[#606060]',    
    error: 'outline outline-1 -outline-offset-1 outline-[#70C05B] text-[#D80000]',    
  }  
}

const buttonNoneColorClasses = {
  default: {
    primary: 'text-[#FF6633]',    
    secondary: 'text-[#70C05B]',    
    gray: 'text-[#606060]',    
    error: 'text-[#D80000]',    
  }
}

const buttonSizeClasses = {
    L:"py-4.5 px-4 text-2xl",
    M:"p-2 text-base",
    S:"px-2 py-1 text-[.75rem]",
    none:""
}

let buttonClass = computed( ()=>{
    let res = ""

    if(props.decoration == "default"){
        res += " " + buttonColorClasses.default[props.color] 
        if (props.hover == true) {
            res += " " + buttonColorClasses.hover[props.color] + "active:shadow-[inset_0_2px_0_0_rgba(0,0,0,.2)]" 
        }
    }    
    if (props.decoration == "outline") {
        res += " " + buttonOutlineColorClasses.default[props.color] 
    }
    if (props.decoration == "none") {
        res += " " + buttonNoneColorClasses.default[props.color] 
    }    

    res += " " + buttonSizeClasses[props.size]    
    + " flex gap-2 items-center justify-center transition-all duration-500 ease-linear rounded";
    return res
})
</script>
