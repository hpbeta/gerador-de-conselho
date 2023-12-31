const adviceId = document.querySelector('.titulo')
const advice = document.querySelector('.descricao')
const adviceBtn = document.querySelector('.botao')

 async function pegarConselho(){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const containt = await  resposta.json()
   
    const adviceNumber = `Advice#${containt.slip.id}`
    const adviceDescription = `"${containt.slip.advice}`
    
    adviceId.innerHTML = adviceNumber
    advice.innerHTML = adviceDescription
 }
 
 adviceBtn.addEventListener('click', pegarConselho)
 pegarConselho()
