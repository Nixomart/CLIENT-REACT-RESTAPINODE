import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostForm from './pages/PostForm';
//notificacion para confirmar eliminacion toaster se pone aca para iniciarlo
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className='bg-neutral-900'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newPost' element={<PostForm />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
    </div>
  );
}

export default App;
