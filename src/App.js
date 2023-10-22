
import './App.css';
import TopBar from './components/Topbar';
import Base from './BasePage/Base';
import { useState } from 'react';
import StudentList from './components/studentList';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InterviewNotes from './pages/interviewnotes';
import Profile from './pages/profile';
import AddNewStudent from './components/AddNewStudent';
import EditStudent from './components/EditPage';
import TeacherList from './components/TeacherList';
import AddNewTeacher from './components/AddNewTeacher';
import TeacherEdit from './components/TeacherEdit';


function App() {
  
  const pages =[{
    name: "Students",
    path: "/student/all",
  }]
  
  const[CrumState, setCrumState] = useState(pages)

  

  return (
    <div className="App">
      <Routes>
    <Route exact path='/' element={<Dashboard/>}/>

        <Route path='/student/all' element={<StudentList
        CrumState={CrumState}
        setCrumState={setCrumState}/>}/>
        <Route path='/profile/' element={<Profile/>}/>
        <Route path='/interviewnotes/' element={<InterviewNotes/>}/>
        <Route path='/addnewstudent/' element={<AddNewStudent/>}/>
        <Route path='/edit/:id' element={<EditStudent CrumState={CrumState}
setCrumState={setCrumState}/>}/>
         <Route path='/teacherlist/' element={<TeacherList/>}></Route>
         <Route path='/addnewteacher/' element={<AddNewTeacher/>}></Route>
         <Route path='/editteacher/:id' element={<TeacherEdit/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
