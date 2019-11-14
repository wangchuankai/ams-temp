import Cookies from 'js-cookie';
let cookieExpires =1;  //cookie 过期时间1天

export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}



//设置 cookie信息  和 设置check信息
let TOKEN_KEY = 'utoken';
export const setToken = (token) => {
  if (process.env.NODE_ENV === 'development') {//
      Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
  }else{
      Cookies.set(TOKEN_KEY, token, { 
          expires: cookieExpires || 1 ,
          domain: 'piaoliusan.com' ,
          path: ''
      })
  }
}


export const getToken = () => {
      // const token = Cookies.get(TOKEN_KEY);
      //可以获取 piaoliusan.com utoken
      const token = Cookies.get().utoken;
      if (token) return token
      else return false
  }
  //请求头参数
export const setBearer = (bearer) => {
  if (process.env.NODE_ENV === 'development') {
      Cookies.set('bearer', 'Bearer ' + bearer, { expires: cookieExpires || 1 })
  }else{
      Cookies.set('bearer', 'Bearer ' + bearer, { 
          expires: cookieExpires || 1 ,
          domain: 'piaoliusan.com' ,
          path: ''
      })
  }
}
export const getBearer = () => {
  const bearer = Cookies.get().bearer;
  if (bearer) return bearer
  else return false
}