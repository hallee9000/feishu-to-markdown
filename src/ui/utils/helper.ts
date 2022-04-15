import { typeMaps } from "./constants"

export function getMediaBase64 (src: string) {
  return fetch(src, {
    credentials: 'include'
  })
    .then(response => response.blob())
    .then(blob => new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))
}

export async function getMimeType (src) {
  const response = await fetch(src)
  return response.blob()
}

export function detectBlock (node) {
  const placeholder = node.querySelector('.block-placeholder')
  const meta = JSON.parse(placeholder.dataset['metaBlockProps'])
  const { blockType, props } = meta
  if (blockType==='FILE_CARD_BLOCK') {
    return props.data.fileInfo.actualType.split('/')[0]
  }
  return 'not-supported'
}

export function getLineType (node) {
  let classList = node.classList
  if (!classList.contains('wrapper')) {
    classList = node.parentNode.classList
  }
  const keys = Object.keys(typeMaps)
  const matchedKey = keys.find(key => {
    const clazzes = key.split(' ')
    return clazzes.every(clazz => classList.contains(clazz))
  })
  let type = typeMaps[matchedKey || 'paragraph']
  if (type==='block') {
    type = detectBlock(node)
  }
  return type
}
