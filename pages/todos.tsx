import { bind, useLoaderData, useAction } from "~/lib/Bind";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  todo: string;
};

const Todos = () => {
  const data = useLoaderData<{ todos: string[] }>();
  const create = useAction("add");

  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => create(data);

  return (
    <>
      {data.todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("todo")} />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default bind(Todos);
