//import x from 'y'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';




function App() {

  return (
    <>
      
      <BrowserRouter>
        

        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/'} element={<Landing />} />
            <Route path={'/neet/online-couching-class-11'} element={<Class11Program />} />
            <Route path={'/neet/online-couching-class-12'} element={<Class12Program />} />
            <Route path={'*'} element={<ErrorPage />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

function Layout() {

  return(<>
    <div style={{height:'100vh'}}>
      <Header />
        <div style={{height:'90vh'}}>
          <Outlet />
        </div>
      <Footer />
    </div>
  </>)
}

function Header() {
  return(<>
    <div style={{background: "green", padding: 10}}>
      <Link to="/"> Allen</Link> | 
      <Link to="/neet/online-couching-class-11"> Class 11</Link> | 
      <Link to="/neet/online-couching-class-12"> Class 12</Link> 
    </div>
  </>)
}

function Footer() {
  return(<>
    <div style={{background: "green", padding: 10 }}>
      <Link to="/"> Allen</Link> | 
      <Link to="/neet/online-couching-class-11"> Class 11</Link> | 
      <Link to="/neet/online-couching-class-12"> Class 12</Link> 
    </div>
  </>)
}

function ErrorPage() {

  return(<>
    404 Error
  </>)
}

function Landing() {
  return(<>
    Welcome to Allen
  </>)
}

function Class11Program() {

  return(<>
    Neet programm for class11
  </>)
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return(<>
    Neet programm for class12
    <button onClick={redirectUser}> Go back to landing page</button>
  </>)
}
export default App
