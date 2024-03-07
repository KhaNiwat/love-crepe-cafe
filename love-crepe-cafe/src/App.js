import Index from './components/Index.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Search from './components/Search/Search.jsx';
import SearchAppBar from './components/Search/SearchAppBar.jsx'
import Shownenu from './components/Shownenu/Shownenu.jsx'
import Menugroup from './components/Menugroup/Menugroup.jsx';
import Listmenu from  './components/Listmenu/Listmenu.jsx';
import Addanddel from './components/addanddel/addanddel.jsx';
function App() {
  return (
    <div className="App">
      {/* <Index/> */}
      <Navbar />
      <Search /> 
      <Listmenu />
      
    </div>
  );
}

export default App;
