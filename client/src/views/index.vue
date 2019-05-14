<template>
    <div class="home">
        <!-- {{ homeMsg }} -->
        <Header />
        <LeftMenu />
        <div class="right-box">
            <router-view></router-view>
        </div>
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
.right-box{
    position: relative;
    left: 180px;
    width: calc(100% - 180px);
    height: calc(100% - 71px);
}
</style>
