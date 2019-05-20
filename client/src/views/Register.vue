<template>
    <div class="manage_tip">
            <el-form :model="registerUser" status-icon ref="registerForm" class="registerForm" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model="registerUser.password2" placeholder="请输入确认密码"></el-input>
                </el-form-item>
                <el-form-item label="选择身份">
                    <el-select v-model="registerUser.identity" placeholder="请选择身份">
                        <el-option value="manager" label="管理员"></el-option>
                        <el-option value="employee" label="员工"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit_btn" @click="submitForm()">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
</template>

<script>
export default {
    data(){
        return {
            registerUser: {
                name: '',
                email: '',
                password: '',
                password2: '',
                identity: ''
            }
        }
    },
    methods:{
        submitForm(){
            this.$store.dispatch('user/saveRegisterUser', {
                method: 'POST',
                data: {
                    ...this.registerUser
                },
                callback: (data) => {
                    if(data){
                        console.log("data: ", data)
                        if(data.status === 'ok'){
                            this.$message({
                                type: "success",
                                message: "注册成功"
                            })
                            this.$router.push('/login')
                        }else{
                            this.$message({
                                type: "error",
                                message: "注册失败"
                            })
                        }
                    }
                }
            })
        },
    }
}
</script>
<style scoped>
    .manage_tip{
        position: relative;
        left: 33%;
        top: 50px;
    }
    .registerForm{ 
        width: 33%;
    }
</style>
