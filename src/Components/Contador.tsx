import {FC, useState} from "react";

interface ContadorProps {
	valor: number;
}

const Contador: FC<ContadorProps> = ({valor}) => {
	const [numero, setNumero] = useState<number>(() => 0);
	
	function diminuir(): void
	{
		setNumero(numero_antigo => numero_antigo - valor);
	}
	
	function aumentar(): void
	{
		setNumero(numero_antigo => numero_antigo + valor);
	}
	
	return (
		<div className="component">
			<button onClick={diminuir}>-</button>
			<button onClick={aumentar}>+</button>
			
			<p>{numero}</p>
		</div>
	);
};

export default Contador;