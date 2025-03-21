import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<><About /><Footer /></>} />
          <Route path='/projects' element={<><Projects /><Footer /></>} />
          <Route path='/contact' element={<><Contact /><Footer /></>} />
          <Route path='*' element={<><Home /><Footer /></>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
