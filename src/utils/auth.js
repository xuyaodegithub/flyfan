const TokenKey = 'user_Token';
const imgsKey='secImgs'

export function getToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);//设置小于一天的时间
  // Cookies.set('foo', 'bar', {
  //   expires: inFifteenMinutes//不设置默认会话式储存，游览器关闭就删除
  // });
  return window.localStorage.setItem(TokenKey,token)
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey)
}
export const setCookie = (name, cvalue, clearDay = 3650) => {
  const d = new Date();
  d.setTime(d.getTime() + Number(clearDay) * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  const value = encodeURI(cvalue);
  document.cookie = name + '=' + value + ';' + expires;
};

export const getCookie = name => {
  const cname = name + '=';
  var carr = document.cookie.split(';');
  for (let i = 0; i < carr.length; i++) {
    let cvalue = carr[i];
    while (cvalue.charAt(0) === ' ') cvalue = cvalue.substring(1);
    if (cvalue.indexOf(cname) !== -1) {
      return decodeURI(cvalue.substring(cname.length, cvalue.length));
    }
  }
};

export const clearCookie = name => {
  setCookie(name, '', -1);
};

export function getSecImgs(imgs) {
  return window.sessionStorage.getItem(imgsKey,imgs)
}
export function setSecImgs(imgs) {
  return window.sessionStorage.setItem(imgsKey,imgs)
}
export function removeSecImgs(imgs) {
  return window.sessionStorage.removeItem(imgsKey,imgs)
}
