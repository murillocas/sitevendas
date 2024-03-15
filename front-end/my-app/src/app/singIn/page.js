"use client"
import React, { useState } from 'react';
import styles from "./form.module.css"

export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = (event) => {
    event.preventDefault();
    
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };
    return (
      
      <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={realizarLogin}>
        <h1> Sing In</h1>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className={styles.botaoNav}>
      <p>Forgot Password</p>
      <p>Register</p>
      </div>
      
      <button type="submit">Login</button>
    </form>
    </div>
    );
  }
  