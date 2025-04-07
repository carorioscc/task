//multiples rutas, creando rutas :)
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
//ES PARA LAS NOTIFICACIONES
import {Toaster} from 'react-hot-toast';
function App(){
  return (
    <BrowserRouter>
    <div className='continer mx-auto'>
      <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to="/tasks" />}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/tasks-create" element={<TaskFormPage/>}/>
          <Route path="tasks/:id" element={<TaskFormPage />}/>
        </Routes>
        <Toaster/>

    </div>
    </BrowserRouter>
  );
}
export default App;