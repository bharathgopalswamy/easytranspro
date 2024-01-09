import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="flex h-screen bg-gray-100">
  <Sidebar/>

  
    <div className="flex-1 flex flex-col overflow-hidden">
     
      <Navbar />

      
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        
      </main>
    </div>
  </div>
);
};
export default App;
