// 轮询检测全局变量 editor 是否挂载上了
function poll (next: () => void) {
  let timerId = setTimeout(function () {
    const { editor } = window
    if (!editor) {
      poll(next)
    } else {
      next()
      clearTimeout(timerId)
    }
  }, 300)
}

export function injectRootNode(callback) {
  window.onload = function () {
    const ui = document.createElement('div')
    ui.id = 'feishu-to-markdown'
    document.body.appendChild(ui)
    poll(function () {
      callback && callback()
    })
  }
}
