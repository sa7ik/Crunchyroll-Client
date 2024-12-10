import logo from './logo.svg';
import './App.css';
import MainRouter from './Components/MainRouter';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
import AdminLogin from './Components/Pages/Admin/AdminLogin';
import Search from './Components/Pages/Search';

function App() {
  return (
    <div className="App">

      <MainRouter/>
      {/* <Search/> */}
    {/* <SignUp/> */}
    {/* <LogIn/> */}
    {/* <AdminLogin/> */}
    </div>
 
  );
}

export default App;