import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";
import { Alert } from "react-native";
import axios from "axios";
import { Axios } from "react-native-axios";
import { api } from "../../services/api";

export function Home () {
//Hooks - states e variaveis
const [cep, setCep] = useState("1235");
const [logradouro, setLogradouro] = useState('');
const [bairro, setBairro] = useState ('');
const [cidade, setCidade] = useState ('');
const [estado, setEstado] = useState ('');
const [uf, setUf] = useState ('');
//Hooks - effects
  
useEffect (() =>{
    
  },[cep]);


  async function loadAdress(){
    //Chama da API
    try {
     
     const dados =  (await api.get(`${cep}/json`)) 
     const endereco = await dados.data

     setLogradouro(endereco.logradouro);
     setBairro(endereco.bairro);
     setCidade(endereco.localidade);
     setEstado(endereco.estado);
     setUf(endereco.uf);
      

   }catch (error) {
     console.log("Erro ao buscar o CEP");
     alert(error);
     alert("erro")

   } 
  }

  return(
    //ScrollForm
    //ContainerForm
    //BoxInput
     //Label
     //Input
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel = "Informe o cep"
          placeholder = "Exemplo"
          fieldValue={cep}
          editable = {true}
          maxLength = {8}
          minLength = {1}
          onChangeText={setCep}
          onBlur={loadAdress}
          keyboardType="numeric"         
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."                 
          maxLength= {50}
          minLength= {1}
          fieldValue={logradouro}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."          
          maxLength= {60}
          minLength= {1}
          fieldValue={bairro}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength= {50}
          minLength= {1}
          fieldValue={cidade}
        />
       
        <RowContainer>
          <BoxInput
          textLabel="Estado"
          placeholder="Estado..."
          fieldWidth={70}
          fieldValue={estado}
        />
        <BoxInput
          textLabel="UF"
          placeholder="UF..."
        fieldWidth={23}
        fieldValue={uf}
        
        />
        </RowContainer>
        
      </ContainerForm>
    </ScrollForm>
  );
};