<template>
    <div class="staff">
        <div class="staff-top">
            <el-button type="primary" @click="openAdd()">添加</el-button>
        </div>
        <div class="staff-table">
            <el-table :data="userData" style="width: 100%">
                <el-table-column 
                    prop="date"
                    label="日期"
                />
                <el-table-column 
                    prop="name"
                    label="用户名"
                />
                <el-table-column 
                    prop="gender"
                    label="性别"
                />
                <el-table-column 
                    prop="status"
                    label="状态"
                />
                <el-table-column 
                    prop="hobbies"
                    label="爱好"
                />
                <el-table-column 
                    prop="wedded"
                    label="是否已婚"
                />
                <el-table-column 
                    prop="birthday"
                    label="生日"
                />
                <el-table-column 
                    prop="address"
                    label="联系地址"
                />
                <el-table-column 
                    fixed="right"
                    label="操作"
                >
                    <template>
                        <el-button>查看</el-button>
                        <el-button>编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <UserDiaLog :form="form" :dialog="dialog"/>
    </div>
</template>
<script>
    import UserDiaLog from '@/components/UserDiaLog.vue'
    export default {
        data(){
            return {
                userData: [],
                dialog: {
                    title: "",
                    show: false,
                    option: "add"
                },
                form: {
                    name: "",
                    gender: "",
                    status: "",
                    hobbies: "",
                    wedded: "",
                    birtday: "",
                    address: ""
                }
            }
        },
        methods: {
            openAdd(){
                 this.dialog = {
                    title: "添加信息",
                    show: true,
                    option:"add"
                }
                this.form = {
                    name: "",
                    sex: "",
                    state: "",
                    hobby: "",
                    marriage: "",
                    birthday: "",
                    address: ""
                }
            },
            userInfo(){
                console.log("ok")
            }
        },
        components: {
            UserDiaLog
        }
    }
</script>