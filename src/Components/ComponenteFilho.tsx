import {FC} from "react";

interface ComponenteFilhoProps {
	funcao: Function;
}

const ComponenteFilho: FC<ComponenteFilhoProps> = ({funcao}) => {
	return (
		<>
			<button onClick={() => funcao()}>Atualizar</button>
		</>
	);
};

export default ComponenteFilho;