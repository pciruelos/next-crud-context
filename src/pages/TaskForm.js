import Layout from "../components/Layout";

const TaskForm = () => {
  return (
    <Layout>
      <form>
      <h1 className="text-center text-2xl text-white mb-2 font-bold">Add a Joke</h1>
      <input type="text" placeholder="Add Title" className="w-full px-4 py-2 mb-2 rounded" />
      <textarea rows={10} placeholder="Description" type="text" className="w-full px-4 py-2 mb-2 rounded"/>
      <button className="w-full px-4 py-2 bg-green-300 disable:opacity-50" disabled> Save</button>
      </form>
    </Layout>
  );
};

export default TaskForm;
