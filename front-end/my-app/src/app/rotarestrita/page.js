"use client"
import axios from "axios";
import api from "../../../services/api";
import { redirect } from 'next/navigation'


export default function Home() {
    /*api.get("vendedor/createItem")
    .then(res=>{
        //console.log(res);
      })
      .catch(error => {
        // Lógica para lidar com erros na requisição
        console.error('Erro na requisição:');

        if (error.response && error.response.status === 403) {
            // Erro de acesso negado
            console.error('Acesso negado:');
            
            // Redireciona para a página de login
            redirect('/login');
          }
      });*/
      async function handleSubmit() {
       
      }
    
    return (
       <h1>rota restrita</h1>
    );
  }
  