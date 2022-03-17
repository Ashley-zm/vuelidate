<template>
  <div>
    <div class="container">
      <p></p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <span>validate 验证测试</span>
        </el-form-item>
        <el-form-item label="姓名" required>
          <el-input
            v-model="form.username"
            style="border-color: red"
          ></el-input>
          <p class="tip" v-show="!$v.form.username.required && isSubmit">
            请输入姓名
          </p>
          <p
            class="tip"
            v-show="
              !$v.form.username.maxLength &&
              !$v.form.username.minLength &&
              isSubmit
            "
          >
            请输入姓名
          </p>
          <!-- <p class="tip">test</p> -->
        </el-form-item>

        <el-form-item label="密码" required>
          <el-input
            v-model="form.password"
            style="border-color: red"
          ></el-input>
          <p class="tip" v-show="!$v.form.password.required && isSubmit">
            请输入密码
          </p>
        </el-form-item>

        <el-form-item label="密码确认" required>
          <el-input v-model="form.confirmPassword"></el-input>
          <p
            class="tip"
            v-show="
              !$v.form.confirmPassword.sameAsPassword &&
              $v.form.confirmPassword.required &&
              isSubmit
            "
          >
            密码不一致
          </p>
          <p class="tip" v-show="!$v.form.confirmPassword.required && isSubmit">
            请输入确认密码
          </p>
        </el-form-item>
        <el-form-item label="手机号" required>
          <el-input
            type="text"
            clearable
            v-model.trim="form.phone"
            placeholder="请输入手机号"
            @blur="$v.form.phone.$touch()"
          ></el-input>
          <p class="tip" v-show="!$v.form.phone.PHONE_NUMBER && isSubmit">
            请输入正确的手机号
          </p>
          <p class="tip" v-show="!$v.form.phone.required && isSubmit">
            请输入手机号
          </p>
        </el-form-item>
        <el-form-item label="邮箱" required>
          <el-input v-model="form.email"></el-input>
          <p class="tip" v-show="!$v.form.email.required && isSubmit">
            请输入邮箱
          </p>
          <p class="tip" v-show="!$v.form.email.email && isSubmit">
            请输入正确的邮箱格式
          </p>
        </el-form-item>
        <el-form-item label="爱好" required>
          <el-select
            size="small"
            v-model="form.play"
            clearable
            @change="updateChild"
            placeholder="选择爱好"
          >
            <el-option
              v-for="item in form.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select size="small" v-model="child" clearable placeholder="全部">
            <el-option
              v-for="item in childrenList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <p class="tip" v-show="!$v.form.play.required && isSubmit">
            请选择爱好
          </p>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-top: 50px" type="primary" @click="reset"
            >重置</el-button
          >
          <el-button style="margin-top: 50px" type="primary" @click="onSubmit"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {
  minLength,
  maxLength,
  sameAs,
  required,
  email,
} from 'vuelidate/lib/validators'
import { PHONE_NUMBER } from '../utils/gex'
export default {
  name: 'test',
  data() {
    return {
      isSubmit: false,
      child: '',
      childrenList: [],
      form: {
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        play: '',
        options: [
          {
            value: '选项1',
            label: '羽毛球',
            typeList: [{ value: '双打' }, { value: '单打' }, { value: '混打' }],
          },
          {
            value: '选项2',
            label: '足球',
            typeList: [
              { value: '守门员' },
              { value: '前锋' },
              { value: '后卫' },
            ],
          },
        ],
      },
    }
  },
  //定义验证字段的规则
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(20),
      },
      phone: {
        required,
        PHONE_NUMBER, //直接就是用的上面导入的gex.js里面设置的校验规则，自定义校验
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(32),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('Password'),
      },
      play: {
        required,
      },
    },
  },
  methods: {
    updateChild(item) {
      this.child = ''
      // this.childrenList = []
      this.form.options.filter((val) => {
        if (val.value === item) this.childrenList = val.typeList
      })
    },
    onSubmit() {
      this.isSubmit = true
      //this.$v.xxx.$touch()用来触发验证事件
      //this.$v.$reset()用来重置验证
      //this.$v.invalid将在任何与我们的验证相关的错误发生时为真
      //提交表单之前检查v.invalid状态。注意：在那之前我们调用v.touch()，
      //这将更改所有表单验证的v.dirty状态，导致所有$invalid字段的$error为true。
      this.$v.$touch()
      // console.log(this.$v.food)
      console.log(this.$v.user.phone)
      // console.log(this.$v.food.$error)
      console.log(this.$v.user.phone.$error)
    },
    reset() {
      console.log(this.$v)
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tip {
  margin: 0;
  text-align: left;
  color: red;
}
</style>