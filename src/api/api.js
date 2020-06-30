import vhttp from './index'
// 是否是登录用户
export const get_whoami = params => vhttp('/whoami', params, 'GET')
//注册
export const register = params => vhttp('/v1/register/', params, 'POST')
//登陆
export const login = params => vhttp('/v1/login/', params, 'POST')