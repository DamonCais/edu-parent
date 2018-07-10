import {
  validateEmail,
  validatePhone,
  validateChinaId,
  validatePassport,
  validateTaiwanPermit,
  validateHongKongPermit
} from '@/utils/validate'

var _validateEmail = (rule, obj, callback) => {
  if (obj.value === '') {
    callback(new Error('请输入邮箱'));
  } else {
    if (!validateEmail(obj.value)) {
      callback(new Error('请输入正确邮箱'));
    }
    callback();
  }
};
var _validatePhone = (rule, obj, callback) => {
  if (obj.value === '') {
    callback(new Error('请输入手机'));
  } else {
    if (!validatePhone(obj.value)) {
      callback(new Error('请输入正确手机'));
    }
    callback();
  }
};
var _validateFullName = (rule, obj, callback) => {
  if (obj.value === '') {
    callback(new Error('请输入姓名'));
  } else {
    callback();
  }
};
var _validatePassword = (rule, obj, callback) => {
  if (obj.value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};
var _validateCheckPass = (rule, obj, callback) => {
  console.log(this);
  if (obj.value === '') {
    callback(new Error('请再次输入密码'));
  } else if (obj.value !== this.a.password.value) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
};

var _validateUsername = (rule, obj, callback) => {
  if (obj.value.trim() === '') {
    callback(new Error('请输入用户名'));
  } else {
    callback();
  }
};

const forms = {
  name: {
    label: '名字',
    placeholder: '',
    type: 'input',
    value: ''
  },
  firstname: {
    label: '姓氏',
    placeholder: '',
    type: 'input',
    value: ''
  },
  birthday: {
    label: '生日',
    placeholder: '',
    type: 'input',
    value: ''
  },
  sex: {
    label: '性别',
    placeholder: '',
    type: 'radio',
    options: [{
      label: '男',
      value: '男'
    }, {
      label: '女',
      value: '女'
    }, ],
    value: ''
  },
  photo: {
    label: '学生照片',
    placeholder: '',
    type: 'imginput',
    value: '',
    src: ''
  },
}

const rules = {
  username: [{
    required: true,
    validator: _validateUsername,
    trigger: 'blur'
  }],
  email: [{
    required: true,
    validator: _validateEmail,
    trigger: 'blur'
  }],
  cellphone: [{
    required: true,
    validator: _validatePhone,
    trigger: 'blur'
  }],
  password: [{
    required: true,
    validator: _validatePassword,
    trigger: 'blur'
  }],
  checkpass: [{
    required: true,
    validator: _validateCheckPass,
    trigger: 'blur'
  }],
}
export {
  forms,
  rules
};
