import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components"

export default function App() {
  return (
    <ViewStyle>
      <Title>Gerador de senhas</Title>
      <Button onPress={() => alert("Olá mundo!")}>
        <TextButton>Gerar senha</TextButton>
      </Button>
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

