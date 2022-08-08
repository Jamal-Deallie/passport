import { Route, Routes } from 'react-router-dom';
import { SignInPage, SignUpPage } from './views';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
