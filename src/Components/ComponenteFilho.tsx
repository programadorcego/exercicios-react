import {FC} from "react";

interface ComponenteFilhoProps {
	funcao: Function;
	index: number;
	unidade: number;
}

const ComponenteFilho: FC<ComponenteFilhoProps> = ({funcao, index, unidade}) => {
	return (
		<>
			<button onClick={() => funcao(index, -unidade)}>-</button>
			<button onClick={() => funcao(index, unidade)}>+</button>
		</>
	);
};

export default ComponenteFilho;