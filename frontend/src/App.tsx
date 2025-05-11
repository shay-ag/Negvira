import './App.css'
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">Sidebar</aside>

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
