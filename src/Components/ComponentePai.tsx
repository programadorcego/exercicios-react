import {FC, useState} from "react";
import ComponenteFilho from "./ComponenteFilho";

const ComponentePai: FC<{}> = () => {
	const [valor1, setValor1] = useState<number>(() => 0);
	const [valor2, setValor2] = useState<number>(() => 0);
	
	function atualizar1(unidade: number): void
	{
		setValor1(valor_antigo => valor_antigo + unidade);
	}
	
	function atualizar2(unidade: number): void
	{
		setValor2(valor_antigo => valor_antigo + unidade);
	}
	
	return (
		<>
			<p>{valor1}</p>
			<p>{valor2}</p>
			
			<hr/>
			
			<ComponenteFilho funcao={atualizar1} unidade={5} />
			<hr/>
			
			<ComponenteFilho funcao={atualizar2} unidade={10} />
			
			<hr />
			
			<p>{valor1 + valor2}</p>
		</>
	);
};

export default ComponentePai;