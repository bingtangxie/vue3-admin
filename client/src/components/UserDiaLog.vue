<template>
    <div class="dialog">
        <el-dialog
            :title="dialog.title"
            type="primary"
            size="small"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :close-on-click-modal="false"
            :visible.sync="dialog.show"
        >
            <el-form :model="form" ref="dialogForm" :rules="formdialog">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-input v-model="form.gender" />
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-input v-model="form.status" />
                </el-form-item>
                <el-form-item label="爱好" prop="hobbies">
                    <el-input v-model="form.hobbies" />
                </el-form-item>
                <el-form-item label="是否已婚" prop="wedded">
                    <el-input v-model="form.wedded" />
                </el-form-item>
                <el-form-item label="生日" prop="birthday">
                    <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"/>
                </el-form-item>
                <el-form-item label="联系地址" prop="address">
                    <el-input v-model="form.address" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="addHandle(formdialog)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // rules属性指定验证规则
            formdialog: {
                name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
                gender: [{ required: true, message: "性别不能为空", trigger: "blur" }]
            }
        }
    },
    props: {
        dialog: Object,
        form: Object,
    },
    methods: {
        addHandle(dialog){
            this.$refs['dialogForm'].validate(valid => {
                if(valid){
                    // console.log("valid is ok")
                    console.log(this.form)
                    this.$store.dispatch('staff/add', {
                        method: 'POST',
                        data: {
                            ...this.form
                        },
                        callback: (data) => {
                            console.log('staffData: ', data)
                        }
                    })
                    this.dialog.show = false        
                    // 调用父组件方法
                    // this.$emit("userData", 'test')
                }else{
                    console.log("error submit!")
                    return false   // 返回false，禁止关闭
                }
            })
        }
    }
}
</script>
<style scoped>
</style>