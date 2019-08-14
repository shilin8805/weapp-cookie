/**
 * Util 类
 */
class Util {
  /**
   * 根据域名获取该域名的 cookie 作用域范围列表
   * @param  {String} domain 指定域名
   * @return {String}        cookie 作用域范围列表
   */
  getCookieScopeDomain (domain = '') {
    if (!domain) return []

    // 获取 cookie 作用域范围列表
    domain = domain.replace(/^\.+/ig, '')
    let scopes = domain.split('.').map(k => ['.', domain.slice(domain.indexOf(k))].join(''))

    return [domain].concat(scopes)
  }

  /**
   * 根据最新的 RFC 6265 标准化域名作用域
   * @param  {String} domain 域名
   * @return {String}        标准化后的域名
   */
  normalizeDomain (domain = '') {
    return domain.replace(/^(\.*)?(?=\S)/ig, '.')
  }

  // 微信小程序
  isWechat () {
    return typeof wx !== 'undefined' && typeof wx.showToast === 'function'
  }

  // 支付宝小程序
  isAlipay () {
    return typeof my !== 'undefined' && typeof my.showToast === 'function'
  }

  // 百度智能小程序
  isSwan () {
    return typeof swan !== 'undefined' && typeof swan.showToast === 'function'
  }

  // 字节跳动小程序
  isTt () {
    return typeof tt !== 'undefined' && typeof tt.showToast === 'function'
  }
}

export default new Util()
