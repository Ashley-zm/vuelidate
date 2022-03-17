import { regex } from 'vuelidate/lib/validators/common.js';

//数字范围验证 整数部分为0-100
const RULES_LNG = regex('val', /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|100)$/);
//数字范围验证
const RULES_LAT = regex('val', /^(-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/);
//数字验证
const RULES_NUMBER = regex('val', /^\d+$/);
//手机号码验证
const PHONE_NUMBER=regex('val',/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/)

export { RULES_LNG, RULES_LAT, RULES_NUMBER ,PHONE_NUMBER};
