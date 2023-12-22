import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

const TodoList: React.FC<{
	items: Todo[];
	onRemove: (selectedItem: string) => void;
}> = props => {
	return (
		<ul>
			{props.items.map(item => (
				<TodoItem
					text={item.text}
					key={item.id}
					onRemove={props.onRemove.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};
export default TodoList;
