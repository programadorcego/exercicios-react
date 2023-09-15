import {FC, useState} from "react";

const App: FC<{}> = () => {
	const [valor1, setValor1] = useState<number>(() => 1);
	const [valor2, setValor2] = useState<number>(() => 2);
	
	function diminuir1(): void
	{
		setValor1(valor_antigo => valor_antigo - 1);
	}
	
	function aumentar1(): void
	{
		setValor1(valor_antigo => valor_antigo + 1);
	}
	
	function diminuir2(): void
	{
		setValor2(valor_antigo => valor_antigo - 1);
	}
	
	function aumentar2(): void
	{
		setValor2(valor_antigo => valor_antigo + 1);
	}

	return (
		<>
			<h1>Exercício useState #01</h1>
			
			<button onClick={diminuir1}>-</button>
			<button onClick={aumentar1}>+</button>
			
			<p>{valor1}</p>
			<hr />
			
			<button onClick={diminuir2}>-</button>
			<button onClick={aumentar2}>+</button>
			
			<p>{valor2}</p>
			<hr/>
			
			<p>{`O resultado de ${valor1} X ${valor2} é ${valor1 * valor2}`}</p>
		</>
	);
};

export default App;