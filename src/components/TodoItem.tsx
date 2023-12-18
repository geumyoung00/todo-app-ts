import { useRef } from 'react';

const TodoItem: React.FC<{
	text: string;
	onRemove: (selectedItem: string) => void;
}> = props => {
	const selectedRef = useRef<HTMLLIElement>(null);
	const findItem = () => {
		const selectedItem = selectedRef.current!.innerText;
		props.onRemove(selectedItem);
	};
	return (
		<li onClick={findItem} ref={selectedRef}>
			{props.text}
		</li>
	);
};
export default TodoItem;
