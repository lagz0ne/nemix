import { Bind, useLoaderData, useAction } from "nemix/Bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Todo } from "~/store";

type FormInput = {
  todo: string;
};

const Todos = () => {
  const data = useLoaderData<{ todos: Todo[] }>();
  const create = useAction("add");
  const remove = useAction("remove");

  const { register, handleSubmit, reset } = useForm<FormInput>({ defaultValues: { "todo": "" } });
  const onSubmit: SubmitHandler<FormInput> = (data) => create(data);

  const [selectedTodo, setSelectedTodo] = useState<string>();

  return (
    <>
      <h1>To do list</h1>

      {data.todos.map(({ value, id }) => (
        <div key={id} >
          {value}
          <button onClick={() => {
            setSelectedTodo(id);
            reset();
          }}>edit</button>
          <button onClick={() => {
            remove({ id })
            if (selectedTodo === id) setSelectedTodo(undefined);
          }}>delete</button>
        </div>
      ))}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("todo")} />
          <button>Add</button>
        </form>
      </div>

      <Bind path="profile" absolute>
        <Profile />
      </Bind>

      {selectedTodo !== undefined &&
        <Bind path={selectedTodo}>
          <TodoDetail />
        </Bind>
      }
    </>
  );
};

const TodoDetail = () => {
  const data = useLoaderData<{ todo: Todo }>();
  return <>
    <div>{JSON.stringify(data)}</div>
  </>
}

const Profile = () => {
  const data = useLoaderData<Record<string, any>>();
  return <>
    <div>Profile {data.hello}</div>
  </>
}

export default Todos;