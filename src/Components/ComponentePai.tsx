import {FC, useState} from "react";
import ComponenteFilho from "./ComponenteFilho";

const ComponentePai: FC<{}> = () => {
	const [valor, setValor] = useState<number>(() => 0);
	
	function atualizar(): void
	{
		setValor(valor_antigo => valor_antigo + 1);
	}
	
	return (
		<>
			<p>{valor}</p>
			
			<ComponenteFilho funcao={atualizar} />
		</>
	);
};

export default ComponentePai;