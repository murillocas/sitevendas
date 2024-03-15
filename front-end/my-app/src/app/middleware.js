export default function handler(req, res) {
  // Middleware para imprimir todas as rotas
  console.log(`Rota acessada: ${req.method} ${req.url}`);

  // Aqui você pode adicionar lógica adicional, como autenticação, manipulação de cabeçalhos, etc.

  // Envie uma resposta de exemplo
  res.status(200).json({ message: 'Middleware executado com sucesso!' });
}