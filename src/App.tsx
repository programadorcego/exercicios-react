import {FC, useState} from "react";

const App: FC<{}> = () => {
	const [logado, setLogado] = useState<boolean>(() => false);
	
	return (
		<>
			<h1>Exercício useState #07</h1>
			<hr/>
			
			{logado && <p>Você está logado!</p>}
			
			<hr/>
			
			<button onClick={() => setLogado(valor_antigo => !valor_antigo)}>Alternar</button>
			
		</>
	);
};

export default App;