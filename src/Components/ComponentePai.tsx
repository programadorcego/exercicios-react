import {FC, useState} from "react";
import ComponenteFilho from "./ComponenteFilho";

const ComponentePai: FC<{}> = () => {
	const [valor, setValor] = useState<number[]>(() => [0, 0, 0]);
	
	function atualizar(index: number, unidade: number): void
	{
		let novo_valor = valor;
		novo_valor[index] += unidade;
		setValor(() => [...novo_valor]);
	}
	
	return (
		<>
			<p>{valor[0]}</p>
			<p>{valor[1]}</p>
			<p>{valor[2]}</p>
			
			<hr/>
			
			<ComponenteFilho funcao={atualizar} index={0} unidade={1} />
			<ComponenteFilho funcao={atualizar} index={1} unidade={1} />
			<ComponenteFilho funcao={atualizar} index={2} unidade={1} />
		</>
	);
};

export default ComponentePai;