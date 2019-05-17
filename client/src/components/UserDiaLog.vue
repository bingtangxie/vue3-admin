<template>
    <div class="dialog">
        <el-dialog
            :title="dialog.title"
            type="primary"
            size="small"
            :close-on-press-escape="true"
            :modal-append-to-body="false"
            :close-on-click-modal="false"
            :visible.sync="dialog.show"
        >
            <el-form :model="form" ref="dialogForm" :rules="formdialog">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <template>
                        <el-radio v-model="form.gender" label=0>男</el-radio>
                        <el-radio v-model="form.gender" label=1>女</el-radio>
                    </template>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <template>
                        <el-radio v-model="form.status" label=0>激活</el-radio>
                        <el-radio v-model="form.status" label=1>冻结</el-radio>
                    </template>
                </el-form-item>
                <el-form-item label="爱好" prop="hobbies">
                    <el-input v-model="form.hobbies" />
                </el-form-item>
                <el-form-item label="是否已婚" prop="wedded">
                   <template>
                        <el-radio v-model="form.wedded" label=0>已婚</el-radio>
                        <el-radio v-model="form.wedded" label=1>未婚</el-radio>
                    </template>
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
                gender: [{ required: true, message: "性别不能为空", trigger: "blur" }],
                birthday: [{type: 'date', message: 'string', trigger: "blur"}]
            },
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
                    let actionName = this.dialog.option == 'add' ? 'add': 'edit'
                    let msg = this.dialog.option == 'add' ? '数据添加成功': '数据修改成功'
                    this.$store.dispatch(`staff/${actionName}`, {
                        method: 'POST',
                        data: {
                            ...this.form
                        },
                        callback: (data) => {
                            if (data.status === 'ok'){
                                this.$message({
                                type: "success",
                                message: msg
                                })
                                this.$store.dispatch('staff/get')
                            }
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