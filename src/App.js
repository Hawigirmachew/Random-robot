import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import SearchRobot from './components/SearchRobot';
import { RobotProvider } from './context/RobotContext';

function App() {
  return (
   <RobotProvider>
     <div className=" h-screen">
     <Header/>
     <SearchRobot/>
     <CardList/>
    </div>
   </RobotProvider>
  );
}

export default App;
