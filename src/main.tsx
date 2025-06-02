import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'animate.css';
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar.tsx'
import Footer from './pages/footer.tsx'
import { store } from './components/store.ts';
import CartLoader from "./components/cartloader";
import ScrollToTop from "./components/scrollToTop";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CartLoader />
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
