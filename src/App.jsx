import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Header />
      <main>
        <div>
          <Outlet />

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
