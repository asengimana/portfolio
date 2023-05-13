import "./utils/style/App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Profile />
        <Works />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
