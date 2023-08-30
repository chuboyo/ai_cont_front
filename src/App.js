import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleOne from './components/ArticleOne';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import PasswordResetConfirmScreen from './screens/PasswordResetConfirmScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        {/* <Footer /> */}
        {/* <ArticleOne/> */}
        {/* <HomeScreen/> */}
        {/* <ArticleScreen/> */}
        {/* <Footer /> */}
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/articles/:id' element={<ArticleScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/user' element={<UserDetailsScreen/>}/>
          <Route path='/password_reset' element={<PasswordResetScreen/>}/>
          <Route path='/password_reset/confirm' element={<PasswordResetConfirmScreen/>}/>
          {/* <Route path='/*' Component={Classifier}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
