import TodoItem from './TodoItem';

const TodoList: React.FC<{
	items: string[];
	onRemove: (selectedItem: string) => void;
}> = props => {
	return (
		<ul>
			{props.items.map(item => (
				<TodoItem text={item} key={item} onRemove={props.onRemove} />
			))}
		</ul>
	);
};
export default TodoList;
