<template>
    <div class="login">
        <el-form :model="user" class="loginForm">
            <el-form-item label="用户名： " prop="name">
                <input v-model="user.name" />
            </el-form-item>
            <el-form-item label="密码： "  prop="psasword">
                <input type="password" v-model="user.password" />
            </el-form-item>
            <el-form-item> 
                <el-button type="primary" @click="submitLogin()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                user: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            submitLogin(){
                this.$store.dispatch('user/saveLoginUser', {
                    method: 'POST',
                    data: {
                        ...this.user
                    },
                    callback: (data)=>{
                        console.log(data)
                        if (data.status === 'ok'){
                            this.$message({
                                type: "success",
                                message: "登录成功"
                            })
                            this.$router.push('/')
                        }else{
                            this.$message({
                                type: "error",
                                message: data.reason
                            })
                        }
                    }
                })
            },
        },
    }
</script>
<style scoped>
    .login{
        position: fixed;
        left: 40%;
        top: 50px;
    }
    .loginForm{
        position: relative;
        text-align: right;
    }
</style>
