import { bind, Bind, useLoaderData, useAction } from "~/lib/Bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type FormInput = {
  todo: string;
};

const Todos = () => {
  const data = useLoaderData<{ todos: string[] }>();
  const create = useAction("add");

  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => create(data);

  const [selectedTodo, setSelectedTodo] = useState<number>();

  return (
    <>
      {data.todos.map((todo, index) => (
        <div key={index} >
          {todo}
          <button onClick={() => setSelectedTodo(index)}>edit</button>
        </div>
      ))}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("todo")} />
          <button>Add</button>
        </form>
      </div>

      <Bind path="profile">
        <Profile />
      </Bind>
      <div>Selected {selectedTodo}</div>
      {selectedTodo !== undefined &&
        <Bind path={selectedTodo.toString()}>
          <TodoDetail />
        </Bind>
      }
    </>
  );
};

const TodoDetail = () => {
  const data = useLoaderData<Record<string, any>>();
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

export default bind(Todos);
