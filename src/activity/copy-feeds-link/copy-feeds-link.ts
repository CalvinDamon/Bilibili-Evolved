import { FeedsCard } from '../feeds-apis'

(async () => {
  const urlList = [
    'https://t.bilibili.com/',
    'https://space.bilibili.com/',
    'https://live.bilibili.com/',
  ]
  if (urlList.every(url => !document.URL.includes(url))) {
    return
  }
  const { forEachFeedsCard, addMenuItem } = await import('../feeds-apis')
  const addCopyLinkButton = (card: FeedsCard) => {
    addMenuItem(card, {
      className: 'copy-link',
      text: '复制链接',
      action: () => {
        GM_setClipboard(`https://t.bilibili.com/${card.id}`, { mimetype: 'text/plain' })
      }
    })
  }
  forEachFeedsCard({
    added: addCopyLinkButton,
  })
})()
