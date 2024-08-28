
import './App.css';
import Footer from './footer';
import Login from './Pages/Login/login';
import StudentSignUp from './Pages/signUp/Student';
import TeacherSignUp from './Pages/signUp/Teacher';

function App() {
  return (
    <div className="App">
      
      
      <header/>
      <StudentSignUp />
      <TeacherSignUp/>
      <Login />
      <Footer/>
    </div>
  );
}

export default App;
