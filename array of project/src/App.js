import logo from './logo.svg';
import './App.css';
import Empl from './Empl';


function App() {
  const posts = [
    {
      id : 1, 
      name : "kano", 
      position : "Full Stack Devloper",
      salary : 10000
    
    },
    {
      id : 1, 
      name : "parth", 
      position : "Manager",
      salary : 20000
    
    },
    {
      id : 1, 
      name : "Dashu", 
      position : "Heacker",
      salary : 500000
    
    },
    {
      id : 1, 
      name : "Chakli", 
      position : "Jasus",
      salary : 10000
    
    },
    {
      id : 1, 
      name : "Rajiyo", 
      position : "web devloper",
      salary : 20000
    
    }
    ]

  return (
    <>
   
  <Empl posts={posts} />
    </>
    
  );
}

export default App;