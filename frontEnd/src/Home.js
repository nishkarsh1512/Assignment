import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Video Streaming Site</h1>
      <Button type="primary" onClick={() => navigate('/register')}>
        Register a new user
      </Button>
      <Button type="primary" onClick={() => navigate('/show')}>
        Show Users
      </Button>
    </div>
  )
}

export default Home

// const navigateHome = () => {
//   // 👇️ navigate to /
//   navigate('/')
// }
