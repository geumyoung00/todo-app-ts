// import { useRef } from 'react';
const TodoItem: React.FC<{
	text: string;
	onRemove: () => void;
}> = props => {
	// const selectedRef = useRef<HTMLLIElement>(null);
	// const findItem = () => {
	// 	const selectedItem = selectedRef.current!.innerText;
	// 	props.onRemove(selectedItem);
	// };

	// const findItem = (item: Todo) => {
	// 	props.onRemove
	// };

	return (
		// <li onClick={findItem} ref={selectedRef}>
		<li onClick={props.onRemove}>{props.text}</li>
	);
};
export default TodoItem;
