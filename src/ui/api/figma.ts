// 获取单个组件库文件中的样式
export async function fetchNodesData (fileKey, ids, token) {
  if (!ids) {
    console.error('ids 参数不能为空')
  }
  try {
    const data = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${ids}`, {
      method: 'GET',
      headers: { "x-figma-token": token }
    })
      .then(response => response.json())
    return data
  } catch (error) {
    throw(error)
  }
}
