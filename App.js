import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from "styled-components"


export default function App() {
  const [senha, setSenha] = React.useState("")


  const randint = (max) => {
    return Math.floor((max) * Math.random() + 1)
  }

  const gerarSenha = (tamanhoSenha) => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ"
    const numeros = "1234567890"
    const especiais = "!@#$%&*?"

    const caracteres = [letras, numeros, especiais]

    const senhaArray = []
    
    for (let i=0; i<tamanhoSenha; i++) {
      let x = randint(caracteres.length - 1)
      let y = randint(caracteres[x].length - 1)

      senhaArray.push(caracteres[x][y])
    }

    let senhaString = ""

    for (let i = 0; i < senhaArray.length; i++) {
      senhaString += senhaArray[i]
    }

    setSenha(senhaString)
  }
  
  const mostrarSenha = () => {
    gerarSenha(8)
  }

  return (
    <ViewStyle>
      <Title>Gerador de senhas</Title>
      <Button onPress={() => mostrarSenha()}>
        <TextButton>Gerar senha</TextButton>
      </Button>
      <SenhaText>{senha}</SenhaText>
      <StatusBar style="auto" />
    </ViewStyle>
  );
}

const ViewStyle = styled.View`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #050A30;
`

const SenhaText = styled.Text`
  color: #7EC8E3;
  font-size: 24px;
  font-weight: bold;
  margin-top: 40%;
`

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin: 15% 0;
`

const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 17px;
  
`

const TextButton = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #050A30;
  padding: 20px;
`

