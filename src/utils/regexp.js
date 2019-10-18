//银行卡号码校验（luhn算法）
export const luhnCheck = num => {
    let arr = (num + '').split('').reverse().map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
};
//删除字符串中的HTMl标签
export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
//当前日期天数
export const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
//：返回当前24小时制时间的字符串
export const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
//获取明天的字符串格式时间
export  const tomorrow = () => {
    let t = new Date();
    t.setDate(t.getDate() + 1);
    return t.toISOString().split('T')[0];
};
//返回值或变量的类型名
export const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
//随机十六进制颜色
export const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
//检测移动/PC设备
export const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
