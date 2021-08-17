<template>
    <div class="login_container"> 
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="loginFormRules">
                <el-form-item class="input" prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item class="input" prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" plain @click="login">Login</el-button>
                    <el-button type="info" plain @click="resetLoginForm">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginFormRules:{
                username:[
                    { required: true, message: 'Enter username, please', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length between 3 and 5', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: 'Enter password, please', trigger: 'blur' },
                    { min: 6, max: 15, message: 'Length between 6 and 15', trigger: 'blur' }
                ],

            },
            loginForm:{
                username:'qq',
                password:'qqqq',

            }
        }
    },
    methods:{
        resetLoginForm(){
            console.log(this)
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            this.$refs.loginFormRef.validate(async valid =>{
                if(!valid) return;
                const result = await this.$http.post("login", this.loginForm)
            })
        }
    }
}
</script>
<style Lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.login_box .avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -40%);
    background-color: #fff;
}
.login_box .avatar_box img{
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background-color: #eee;
}

.btns{
    display: flex;
    justify-content: flex-end;
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

</style>