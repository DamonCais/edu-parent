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

  relationship: {
    label: '关系',
    placeholder: '请选择',
    type: 'select',
    options: [{
        value: '爸爸',
        label: '爸爸'
      }, {
        value: '妈妈',
        label: '妈妈'
      },
      {
        value: '其他',
        label: '其他'
      }
    ],
    value: ''
  },
  username: {
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

  Citizenship: {
    label: '户口所在地',
    placeholder: '',
    type: 'input',
    value: ''
  },
  id: {
    label: '身份证',
    placeholder: '',
    type: 'input',
    value: ''
  },
  phone: {
    label: '家庭电话',
    placeholder: '',
    type: 'input',
    value: ''
  },
  cellphone: {
    label: '手机',
    placeholder: '',
    type: 'input',
    value: ''
  },
  email: {
    label: '邮箱',
    placeholder: '',
    type: 'input',
    value: ''
  },
  address: {
    label: '家庭住址',
    placeholder: '',
    type: 'input',
    inputType: 'textarea',
    value: '',

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
