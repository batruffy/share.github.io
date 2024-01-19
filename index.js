var content = 'I Hate You😭'

let btn = document.querySelector('.share-btn')
console.log(btn)

btn.addEventListener('click', () => {
  for (let i = 0; i < 1000; i++) {
    content = content + content
  }
  let whatsappUrl = 'whatsapp://send?text=' + encodeURIComponent(content)
  window.location.href = whatsappUrl
})
