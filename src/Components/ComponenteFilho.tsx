import {FC} from "react";

interface ComponenteFilhoProps {
	funcao: Function;
	unidade: number;
}

const ComponenteFilho: FC<ComponenteFilhoProps> = ({funcao, unidade}) => {
	return (
		<>
			<button onClick={() => funcao(-unidade)}>-</button>
			<button onClick={() => funcao(unidade)}>+</button>
		</>
	);
};

export default ComponenteFilho;