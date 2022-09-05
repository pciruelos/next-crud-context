import { useTask } from "../context/GlobalContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Home = () => {
  const { tasks, deleteTask } = useTask();
  const { push, query } = useRouter();

  return (
    <Layout>
      {tasks.lenght === 0 ? (
        <h2>No Jokes found</h2>
      ) : (
        <div className="text-black  flex items-center justify-around mx-auto w-6/12">
          
          {tasks.map((t, i) => (
            <div
              onClick={() => push("/edit/" + t.id)}
              className="bg-white p-5 rounded mx-2"
            >
              <span>Joke number:{i}</span>
              <div>
                <h1 className="font-bold text-2xl">{t.title}</h1>
                <p className="p-5">{t.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(t.id);
                  }}
                  className="bg-red-600 px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
