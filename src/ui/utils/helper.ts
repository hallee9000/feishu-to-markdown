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
  return typeMaps[matchedKey || 'paragraph']
}
