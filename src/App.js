import { SplitScreen } from './components/SplitScreen';
import { SideNav } from './components/SideNav';
import { Main } from './components/Main';
import './App.css';

const clients = [
  {
    name: 'Groupe Post Luxembourg',
    employees: 4540
  },
  {
    name: 'Groupe CFL',
    employees: 4360
  },
  {
    name: 'Groupe Cactus',
    employees: 4320
  },
  {
    name: 'Groupe Dussmann Luxembourg',
    employees: 4060
  },
  {
    name: 'BGL BNP Paribas',
    employees: 3900
  },
  {
    name: 'Groupe ArcelorMittal',
    employees: 3810
  }
]

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <SideNav />
      <Main clients={clients}/>
    </SplitScreen>
  );
}

export default App;
