import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useTask } from "../context/GlobalContext";
import { useRouter } from "next/router";

const TaskForm = () => {
  const { createJoke,editJoke,tasks } = useTask();
  const { push, query } = useRouter();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (query.id) {
     const jokeFound = tasks.find(t => t.id === query.id);
     setTask({title: jokeFound.title,description: jokeFound.description})
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //destructuring arrriba
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.id) {
      createJoke(task.title, task.description);
    } else {
      editJoke(query.id, task)
    }
    push("/");
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl text-white mb-2 font-bold">
          {query.id ? 'updating Joke' : 'Create a Joke'}
        </h1>
        <input
          type="text"
          name="title"
          value={task.title}
          placeholder="Add Title"
          className="w-full px-4 py-2 mb-2 rounded"
          onChange={handleChange}
        />
        <textarea
          type="text"
          value={task.description}
          name="description"
          placeholder="Description"
          rows={10}
          className="w-full px-4 py-2 mb-2 rounded"
          onChange={handleChange}
        />
        <button
          className="w-full px-4 py-2 bg-green-300 disable:opacity-50 disabled:opacity-50"
          disabled={!task.title}
        >
          {" "}
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskForm;
