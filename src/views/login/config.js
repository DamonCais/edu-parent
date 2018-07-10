	const forms = {

	  username: {
	    label: '账号',
	    placeholder: '账号',
	    tips: '',
	    src: '',
	    type: 'input',
	    value: ''
	  },
	  password: {
	    label: '密码',
	    tips: '',
	    src: '',
	    type: 'input',
	    value: ''
	  },
	}

	// function validateEmail(str) {
	//     let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	//     return reg.test(str.value)
	// }
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
	    obj.tips = 'hahah';
	    callback(new Error('请输入手机'));
	  } else {
	    if (!validatePhone(obj.value)) {
	      callback(new Error('请输入正确手机'));
	    }
	    callback();
	  }
	};
	var _validateChinaId = (rule, obj, callback) => {
	  if (obj.value === '') {
	    callback(new Error('请输入身份证号'));
	  } else {
	    if (!validateChinaId(obj.value)) {
	      callback(new Error('请输入正确身份证号'));
	    }
	    callback();
	  }
	};
	var _validatePassportId = (rule, obj, callback) => {
	  if (obj.value === '') {
	    callback(new Error('请输入护照'));
	  } else {
	    if (!validatePassport(obj.value)) {
	      callback(new Error('请输入正确护照号码'));
	    }
	    callback();
	  }
	};
	var _validatePermitId = (rule, obj, callback) => {
	  let message = '请输入通行证号码';
	  if (obj.value === '') {
	    callback(new Error(message));
	  } else {
	    if (obj.idType === 'HongKongPermit') {
	      if (!validateHongKongPermit(obj.value)) {

	        callback(new Error('请输入正确港澳通行证号码'));
	      }
	      callback();
	    } else {
	      if (!validateTaiwanPermit(obj.value)) {

	        callback(new Error('请输入正确台湾通行证号码'));
	      }
	      callback();
	    }

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

	var _validateUsername = (rule, obj, callback) => {
	  if (obj.value === '') {
	    callback(new Error('请输入账号'));
	  } else {
	    if (!validateEmail(obj.value)) {
	      callback(new Error('请输入正确账号'));
	    }
	    callback();
	  }
	};
	const rules = {
	  username: [{
	    required: true,
	    validator: _validateUsername,
	    trigger: 'blur'
	  }],
	  password: [{
	    required: true,
	    validator: _validatePassword,
	    trigger: 'blur'
	  }],
	}
	export {
	  forms,
	  rules
	};
