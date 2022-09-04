import {useTask} from '../context/GlobalContext'
import Layout from '../components/Layout'

const Home = () => {

  const {tasks} = useTask()

 console.log(tasks)

  return (
    <Layout>
      <h1 className='text-blue-700'>Index</h1>
    </Layout>
  )
}

export default Home