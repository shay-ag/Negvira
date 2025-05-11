import './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';

const App = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="main">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="content">
          Dashboard content goes here.
        </section>
      </main>
    </div>
  );
};

export default App;
