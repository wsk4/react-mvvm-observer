import { useState } from "react";
import { useTodos } from "../../../store/TodoStore";
import { todoService } from "../service/todoService";

export const useTodoViewModel = () => {
    const { todos, addTodo, removeTodo } = useTodos();
    const [text, setText] = useState("");

    const createTodo = () => {
        if (!text) return;

        const newTodo = todoService.create(text);
        addTodo(newTodo);
        setText("");
    };

    return {
        todos,
        text,
        setText,
        createTodo,
        removeTodo,
    };
};