import vhttp from './index'
// 是否是登录用户
export const get_whoami = params => vhttp('/whoami', params, 'GET')
//注册
export const register = params => vhttp('/v1/register/', params, 'POST')
//登陆
export const login = params => vhttp('/v1/login/', params, 'POST')
//发表文章
export const publishArticle = params => vhttp('/v1/article/', params, 'POST')
//得到作者所有文章
export const getArticle = params => vhttp('/v1/article/', params, 'GET')
//获取首页数据
export const getHomeArticle = params => vhttp('/v1/index/', params, 'GET')