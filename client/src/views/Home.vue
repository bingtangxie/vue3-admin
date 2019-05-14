<template>
    <div class="home">
        {{ homeMsg }}
    
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import LeftMenu from '@/components/LeftMenu.vue'
    export default {
        data(){
            return {
                homeMsg: "This is Home page"
            }
        },
        components: {
            Header,
            LeftMenu,
        }
    }
</script>

<style>

</style>
