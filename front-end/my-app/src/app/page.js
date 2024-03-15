"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect,useState  } from 'react';
import axios from "axios";

 export default function Home() {
   /*axios.get("/api/login").then(res=>{
   // console.log(res);
  });*/

  const [data, setData] = useState(null);

  useEffect(() => {
    // Função para fazer a requisição
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/comprador/allitems');
        const data = await response.json();
        setData(data);
       console.log('Resultado da requisição:', data);
      } catch (error) {
       console.error('Erro ao fazer a requisição:', error);
      }
    };

    // Chama a função de requisição
    fetchData();
  }, []);
  
  return (
    <div>
    <h1>Lista de Usuários</h1>
    <ul>
    {data ? (
          data.map(item => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id},&nbsp;
              <strong>Nome:</strong> {item.name},&nbsp;
              <strong>Quantidade:</strong> {item.qtd}
            </li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
    </ul>
  </div>
  );
}
