/**
 * 适配小程序API宿主对象
 */
let api
if (typeof wx !== 'undefined') {
  api = wx
} else if (typeof tt !== 'undefined') {
  api = tt
} else if (typeof my !== 'undefined') {
  api = my
} else if (typeof swan !== 'undefined') {
  api = swan
}
export default api
