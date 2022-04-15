import nullthrows from '@shared/helper';
// import { DOMMessage, DOMMessageResponse } from '../types';

// 插入一段代码到当前网页中
function injectCode(src: string) {
  const script = document.createElement('script');
  // This is why it works!
  script.src = src;
  script.onload = function() {
    console.log("🤖🤖🤖🤖🤖 script injected 🤖🤖🤖🤖🤖");
    script.remove();
  };

  nullthrows(document.head || document.documentElement).appendChild(script);
}

const isFile = /\/docs\/[A-Za-z0-9]*/.test(window.location.pathname)
if (isFile) {
  injectCode(chrome.runtime.getURL('/js/ui.js'));
}

// 接收从插件界面中发来的消息
// const messagesFromReactAppListener = (
//   msg: DOMMessage,
//   sender: chrome.runtime.MessageSender,
//   sendResponse: (response: DOMMessageResponse) => void
// ) => {
//   console.log('[content.js]. Message received', msg);
//   injectCode(chrome.runtime.getURL('/static/js/ui.js'));
//   //  sendResponse(response);

// }

// chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
