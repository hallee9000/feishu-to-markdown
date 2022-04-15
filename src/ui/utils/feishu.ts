import Jszip from 'jszip'
import saveAs from 'file-saver'
import { getMediaBase64, getLineType } from './helper'

import type JSZip from 'jszip'

class FeishuToMarkdown {
  zip: JSZip;
  mediaFolder: JSZip;
  mediaIndex: number;
  content: any;

  constructor () {
    this.zip = new Jszip()
    // create folder for images or videos
    this.mediaFolder = this.zip.folder("medias")
    this.mediaIndex = 1
    this.content = window.editor._contentState.content.get('0')
  }

  parseRichText (ops) {
    return ops
      .map((op) => {
        const { attributes, insert } = op
        const attrKeys = Object.keys(attributes)
        if (insert!=='*') {
          let content = insert
          const urlKey = attrKeys.find(attr => attr.startsWith('url-'))
          const isInlineBlock = attrKeys.includes('inline-code')
          const isBold = attrKeys.includes('bold')
          if (urlKey) {
            content = `[${insert}](${attributes[urlKey]})`
          }
          if (isInlineBlock) {
            content = `\`${content}\``
          }
          if (isBold) {
            content = `**${content}**`
          }
          return content
        } else {
          return ''
        }
      })
      .join('')
  }

  /**
   * 
   * @param type - media type, `img` or `video`
   * @param node - DOM node
   * @param mediaFolder - media folder in zip file
   * @returns 
   */
  async generateMedias (type, node) {
    const medias: NodeList = node.querySelectorAll(type || 'img')
    const mediaList = [...medias]
    const promises = mediaList.map((media: HTMLImageElement|HTMLVideoElement) => getMediaBase64( media.src))
    const mediasData = await Promise.all(promises)
    return mediasData.map(base64 => {
      if (typeof base64 === 'string') {
        const [meta, data] = base64.split(';base64,')
        const format = meta.split('/')[1]
        const fileName = `${this.mediaIndex++}.${format}`
        this.mediaFolder.file(fileName, data, {base64: true});
        return type==='img' ? `![](./medias/${fileName})` : `<video width="100%" src="./medias/${fileName}" controls/>`
      }
    }).join('\n')
  }

  async determineLineContent (line) {
    const type = getLineType(line._node)
    switch (type) {
      case 'h1':
        return `# ${line.getText()}`
      case 'h2':
        return `### ${line.getText()}`
      case 'h3':
        return `### ${line.getText()}`
      case 'h4':
        return `#### ${line.getText()}`
      case 'h5':
        return `##### ${line.getText()}`
      case 'h6':
        return `###### ${line.getText()}`
      case 'p':
        return this.parseRichText(line.content.ops)
      case 'blockquote':
        const innerText = this.parseRichText(line.content.ops)
        return `> ${innerText}`
      case 'image':
        return this.generateMedias('img', line._node)
      case 'list':
        const richText = this.parseRichText(line.content.ops)
        return `- ${richText}`
      case 'video':
        return this.generateMedias('video', line._node)
    
      default:
        break;
    }
  }

  async parseMarkdown () {
    console.log('🤖🤖🤖🤖🤖', this.content)
    const promises = this.content.lines.map(line => this.determineLineContent(line))
    const markdownLines = await Promise.all(promises)
    console.log('🤖🤖🤖🤖🤖', markdownLines.join('\n'))
    const docTitle = this.content.lines[0].getText()
    const docFileName = `${docTitle}.md`
    this.zip.file(docFileName, markdownLines.join('\n'))
    this.zip.generateAsync({type:"blob"})
      .then(function(result) {
          saveAs(result, `${docTitle}.zip`)
      })
  }
}

export default FeishuToMarkdown
