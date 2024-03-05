import Index from './components/Index.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Search from './components/Search/Search.jsx';
import SearchAppBar from './components/Search/SearchAppBar.jsx'
import Shownenu from './components/Shownenu/Shownenu.jsx'
import Menugroup from './components/Menugroup/Menugroup.jsx';
function App() {
  return (
    <div className="App">
      {/* <Index/> */}
      <Navbar />
      <Search /> 
      <Menugroup />
      <Shownenu />
    </div>
  );
}

export default App;
