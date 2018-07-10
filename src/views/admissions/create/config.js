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

  student: {
    label: '学生',
    type: 'select',
    options: [{
      value: '陈跃浩',
      label: '陈跃浩'
    }, {
      value: '其他',
      label: '其他'
    }],
    value: ''
  },
  firstname: {
    label: '姓氏',
    type: 'input',
    value: ''
  },
  name: {
    label: '姓名',
    type: 'input',
    value: ''
  },
  birthday: {
    label: '出生日期',
    type: 'input',
    value: ''
  },
  sex: {
    label: '性别',
    type: 'input',
    value: ''
  },
  Year: {
    label: '选择年份',
    type: 'select',
    options: [{
      value: '2018-2019',
      label: '2018-2019'
    }, {
      value: '2017-2018',
      label: '2017-2018'
    }],
    value: ''
  },
  grade: {
    label: '选择年级',
    type: 'select',
    options: [{
      value: '一年级',
      label: '一年级'
    }, {
      value: '二年级',
      label: '二年级'
    }],
    value: ''
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
