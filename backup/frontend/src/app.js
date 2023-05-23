import GlobalStyle from "./settingStyle/styles";
import {toast} from "react-toastify";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid.js";
import {useEffect} from "react"
import {useState} from "react";
import axios from "axios"


const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
    gap:10px;
`;

const Title = styled.h2``;


function App() {

  
  const [contas,setUsers] =  useState([]);
  const [onEdit,setOnEdit] =  useState(null);

  const getContas = async()=>{
    try{
        const res = await axios.get("http://localhost:3333/contas");
        console.log(res.data)
        setUsers(res.data)

    }
    catch(error)
    {
      toast.error(error)
    }

  }

  useEffect(()=>{
    getContas();
  }, [setUsers])
  
  return (
    <div >
      <Container>
        <Title> Controle de Contas </Title>
        <Form/>        
        <Grid contas={contas}/>
      </Container>

      <ToastContainer autoClose={4000} position={toast.POSITION.TOP_CENTER}/>
      <GlobalStyle/>
    </div>
  );
}

export default App;