import TodosList from "@/components/Todos/TodosList";
import Link from "next/link";

export default function TodosPage() {
    return (<>
        <h2>Todos</h2>

        <TodosList />

        <Link href={'/todos/create'}>Create new todo</Link>
    </>);
}