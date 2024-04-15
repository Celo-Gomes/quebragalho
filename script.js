document.querySelector("#bClear").onclick = ()=>{
    location.reload()
}

function depure(){
    let textI = document.querySelector('#in')
    let text = textI.value
    let textO = document.querySelector("#out")
    document.querySelector('#bCopy').style.opacity ='1'
    
    
    let rows = text.trim().split('\n')
    let arrays = []

    rows.forEach(row =>{
        let parts = row.split(' ')
        arrays.push(parts)
    })

    let x = 0
    while(arrays.length > x){
        let name = arrays[x][1]
        let ddd = arrays[x][arrays[x].length-2]
        let cell = arrays[x][arrays[x].length-1]
        let dddOr = arrays[x][arrays[x].length-5]
        let cellOr = arrays[x][arrays[x].length-4]

        if(arrays[x].includes('ou')){
            console.log(arrays[x][1]+" "+arrays[x][arrays[x].length-5] + arrays[x][arrays[x].length-4])
            
            if((dddOr + cellOr).length != 11){
                let res = (arrays[x][arrays[x].length-5] + arrays[x][arrays[x].length-4]).length
                console.log(res)
                textO.innerHTML +=`
                    <tr>
                        <td>${name}</td>
                        <td style = "color:red;">${dddOr}${cellOr}</td>
                    </tr>
                 `
            }
            else{
                textO.innerHTML += `
                    <tr>
                        <td>${name}</td>
                        <td>${dddOr}${cellOr}</td>
                    </tr>
                `
            }
        }
        else{
            console.log(arrays[x][1]+' '+arrays[x][arrays[x].length-2] + arrays[x][arrays[x].length-1])
            
            if((ddd + cell).length != 11){
                let res= (ddd + cell).length 
                console.log(res)
                 text.innerHTML += `
                    <tr>
                        <td>${name}</td>
                        <td style = "color:red;">${ddd}${cell}</td>
                    </tr>
                 `
            }
            else{
                textO.innerHTML +=`
                    <tr>
                        <td>${name}</td>
                        <td>${ddd}${cell}</td>
                    </tr>
                `
            }
        }
        x++    
    }   
}

function copy() {
    let table = document.querySelector("#out");
    let temp = document.createElement("textarea");

    // Copiar o HTML da tabela para o elemento de texto
    temp.value = table.outerHTML;

    // Adicionar o elemento de texto à página (não é visível)
    document.body.appendChild(temp);

    // Selecionar todo o texto dentro do elemento de texto
    temp.select();

    // Copiar "copy" o texto selecionado para a área de transferência
    document.execCommand("copy");

    // Remover o elemento de texto da página
    document.body.removeChild(temp);

    alert("Tabela copiada para a área de transferência!");
}


//função abaixo ilustra uma ação que copiará um simples texto dentro de um elemento

// function copy(){
//     let textCopy = document.querySelector("#out").innerHTML
   

//     navigator.clipboard.writeText(textCopy)
//         .then(() => {
//             console.log("Texto copiado com sucesso!");
//         })
//         .catch(err => {
//             console.error("Falha ao copiar texto: ", err);
//         });
// }


