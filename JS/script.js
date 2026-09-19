const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {

        const nome = document.getElementById('nome').value.trim()
        const email = document.getElementById('email').value.trim()
        const telefone = document.getElementById('telefone').value.trim()
        const msg = document.getElementById('msg').value.trim()
        if (nome != '' && email != '' && telefone != '' && msg != '') {
            const meuNumero = '5511987526417'

            const textMsg =
                `*Nova mensagem recebida pelo site*
*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Mensagem:*
${msg}`

            const codText = encodeURIComponent(textMsg)
            const waweb = `https://web.whatsapp.com/send?phone=${meuNumero}&text=${codText}`
            window.open(waweb, '_blank')
        } else {
            window.alert('Por favor, preencha o formulário para enviar uma mensagem!')
        }
    })
    // Mostra Ano
const ano = document.getElementById('year')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual