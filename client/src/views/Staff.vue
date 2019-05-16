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
                    width="180"
                >
                    <template slot-scope="scope">
                        <el-button size="mini" @click="openEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" @click="delStaff(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <UserDiaLog :form="form" :dialog="dialog"/>
    </div>
</template>
<script>
    import UserDiaLog from '@/components/UserDiaLog.vue'
import { mapGetters } from 'vuex';
    export default {
        data(){
            return {
                // userData: [],
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
                    birthday: "",
                    address: ""
                }
            }
        },
        computed: {
            ...mapGetters('staff',{
                userData: 'staffList'
            })
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
                    gender: "",
                    status: "",
                    hobbies: "",
                    wedded: "",
                    birthday: "",
                    address: ""
                }
            },
            openEdit(index, row){
                   this.dialog = {
                    title: "编辑信息",
                    show: true,
                    option:"edit"
                }
                this.$store.dispatch('staff/getOne', {
                    id: row._id,
                    callback: (data) => {
                        if(data){
                            this.form = data
                        }
                    }
                })

            },
            userInfo(){
                this.$store.dispatch('staff/get')
            },
            delStaff(index, row){
                console.log('val: ', row._id)
                this.$store.dispatch('staff/delete', {
                    id: row._id,
                    callback: (data)=>{
                        console.log('delete: ', data)
                        if(data.status === 'ok'){
                            this.$store.dispatch('staff/get')
                        }
                    }
                })
            },
            updateStaff(index, row){

            },
        },
        created(){
            this.$store.dispatch('staff/get')
        },
        components: {
            UserDiaLog
        }
    }
</script>