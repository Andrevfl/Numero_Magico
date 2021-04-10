var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3
//enquanto o jogador tiver tentativas
while (tentativas > 0){
      var chute = parseFloat(prompt('Digite um numero entre 0 e 10 !!!!'))
      if(numeroSecreto == chute){
        alert('Você acertou o numero secreto !!!!!')
        break
          }else if(numeroSecreto < chute){
            alert('O numero secreto é menor que o chute !!!!! essa foi a sua tentativa de numero ' + tentativas )
            tentativas = tentativas - 1
              if(tentativas == 0){
                  alert('Você usou todas as tentativas, o numero secreto era ' + numeroSecreto )
                }
              }else if(numeroSecreto > chute){
                 alert('O numero secreto é maior que o seu chute !!!! essa foi a sua tentativa de numero '  + tentativas )    
                 tentativas = tentativas - 1
                if(tentativas == 0){
                 alert('Você usou todas as tentativas, o numero secreto era ' + numeroSecreto )
                }
       }
         }






