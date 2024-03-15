import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});

api.interceptors.request.use(async config => {
  const token = "";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    //console.log(response)
    // Se a resposta indicar que o usuário não está autenticado (por exemplo, status 401),
    // você pode redirecionar para a página de login aqui
    return response;
  },
  (error) => {
    // Se houver um erro de autenticação, como token expirado, você pode redirecionar para a página de login
    if (error.response && error.response.status === 401) {
      const history = useHistory();
      // Redireciona para a página de login
      history.push('/singIn');
    }

    // Retorna o erro para que ele seja tratado no restante do código
    return Promise.reject(error);
  }
);
export default api;