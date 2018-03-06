<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="user_name">
                    <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        ruleForm2: {
          user_name: "ivanyb",
          password: '123'
        },
        rules2: {
          user_name:[{required:true,message:'不能为空哦~~',trigger:'blur'}] ,
          password:[{required:true,message:'要有密码哦~~',trigger:'blur'}]
        }
      };

    },
    methods: {
        login(){
           this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
               if(res.data.status==0){
                   this.$alert("登录成功了哟~~","TIP",{
                       callback:()=>{
                           localStorage.setItem('user_name',res.data.message.user_name)
                        // 如果之前有别的就跳过去
                           this.$router.push({path:this.$route.query.next||'/goods/list'})
                       }
                   })

               }else{
                   this.$alert("呀！登录失败惹！")
               }
           })
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            this.$alert("错误")
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background-color: wheat;
  section {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: 3px solid white;
    border-radius: 5px;
    .demo-ruleForm{
        margin-top: 50px;
        margin-right: 30px;
    }
  }
}
</style>