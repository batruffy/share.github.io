let content = "I Hate You😭";



let btn = document.querySelector('.share-btn')
console.log(btn)



btn.addEventListener('click', ()=>{
    let whatsappUrl = "whatsapp://send?text="+encodeURIComponent(content)
    window.location.href = whatsappUrl
})