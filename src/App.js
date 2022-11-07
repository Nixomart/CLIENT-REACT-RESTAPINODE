import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostForm from './pages/PostForm';
function App() {
  return (
    <div className='bg-neutral-900 h-screen flex items-center'>
    <div className=' px-20px m-auto text-sm'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newPost' element={<PostForm />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
