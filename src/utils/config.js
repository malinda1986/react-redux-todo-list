const APIV1 = '/api/v1'

module.exports = {
  name: 'My Todo',
  prefix: 'todoAdmin',
  footerText: 'My Todos  © 2018 Malinda',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/iconfont.css',
  iconFontJS: '/public/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    todos: `${APIV1}/todos`,
    user: `${APIV1}/user/:id`,
    todo: `${APIV1}/todo/:id`,
    menus: `${APIV1}/menus`,
  },
}
