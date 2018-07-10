export function validateEmail(str) {
  let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  return reg.test(str)
}


export function validatePhone(str) {
  let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(str)
}

export function validateChinaId(str) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}


export function validatePassport(str) {
  var reg1 = /^[a-zA-Z]{5,17}$/;
  var reg2 = /^[a-zA-Z0-9]{5,17}$/;
  return reg1.test(str) || reg2.test(str);
}

export function validateHongKongPermit(str) {
  var reg1 = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;

  return reg1.test(str)
}

export function validateTaiwanPermit(str) {
  var reg2 = /^[0-9]{8}$/;
  var reg1 = /^[0-9]{10}$/;
  return reg1.test(str) || reg2.test(str)
}
