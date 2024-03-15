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
      <form onSubmit={realizarLogin}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
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
      <button type="submit">Enviar</button>
    </form>
    );
  }
  