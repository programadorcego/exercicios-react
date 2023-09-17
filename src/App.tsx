import {FC, useState} from "react";

const App: FC<{}> = () => {
	type valorObj = {
		nome: string;
		sobrenome: string;
		email: string;
	}
	
	const [valor, setValor] = useState<valorObj>(() => ({
		nome: "",
		sobrenome: "",
		email: ""
	}));
	
	return (
		<>
			<h1>Exercício useState #06</h1>
			<hr/>
			
			<p>Nome: {valor.nome}</p>
			<p>Sobrenome: {valor.sobrenome}</p>
			<p>E-mail: {valor.email}</p>
			<hr />
			
			<button onClick={() => setValor(valor_antigo => ({...valor_antigo, nome: "Willian"}))}>Alterar nome</button>
			<button onClick={() => setValor(valor_antigo => ({...valor_antigo, sobrenome: "Pereira"}))}>Alterar Sobrenome</button>
			<button onClick={() => setValor(valor_antigo => ({...valor_antigo, email: "programadorcego@gmail.com"}))}>Alterar E-mail</button>
		</>
	);
};

export default App;