<template>
  <el-form ref="form" :model="form" class="form" :rules="rules">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名手机"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="captcha">
      <el-input v-model="form.captcha" placeholder="验证码">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="nickname">
      <el-input v-model="form.nickname" placeholder="你的名字"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="password" type="password">
      <el-input v-model="form.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="checkPassword" type="password">
      <el-input v-model="form.checkPassword" placeholder="确认密码"></el-input>
    </el-form-item>

    <el-button type="primary" class="submit" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    // 表单中的自定义校验规则

    // rule当前的规则，目前是空的
    // value 输入框的值
    // callback是回调函数，必须要调用
    const checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 表单数据
      form: {
        username: "",
        captcha: "",
        nickname: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        checkPassword: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    //  发送验证码
    handleSendCaptcha() {
      // 判断如果手机号为空，不请求
      if (!this.form.username) {
        this.$message.error("请输入手机号");
        return;
      }
      // 发送验证码
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        // 解构出code属性
        const { code } = res.data;

        this.$alert(`模拟手机验证码是:${code}`, "提示");
      });   
    },
    // 注册
    handleRegSubmit(){
        this.$refs.form.validate(valid=>{
            if(valid){
                // 可以使用 ...+变量名会指向剩余的属性
                const{checkPassword,...rest} = this.form

                // 调用注册接口
                this.$axios({
                    url:'/accounts/register',
                    method:'POST',
                    data:rest
                }).then(res=>{
                    // 注册成功后帮用户自动登录
                    // commit 接受两个参数，第一个是mutations的方法名，第二个是参数数据
                    this.$store.commit('user/setUserInfo',res.data)
                })
            }
        })
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>