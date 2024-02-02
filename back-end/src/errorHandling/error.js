
module.exports = {
    errorHandler: (err, req, res, next) => {
        if (err.message === 'Invalid credentials') {
            res.status(401).json({ error: err.message });
        } if (err.message === 'access denied') {
            res.status(403).json({ error: err.message });
        } if(err.message == "Rota não encontrada"){
            res.status(404).json({error: err.message });
        } if(err.message == "Erro assíncrono"){
            res.status(500).json({error: err.message });

        }if(err.message == "Credenciais inválidas"){
            res.status(401).json({ message: 'Credenciais inválidas' });

        }else {
            res.status(err.status || 500).json({ erro: err.message });
        }
    }
};       
