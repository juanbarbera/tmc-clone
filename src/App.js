import { useState } from 'react';
import { SplitScreen } from './components/SplitScreen';
import { SideNav } from './components/SideNav';
import { Main } from './components/Main';
import './App.css';
import { useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const viewPortWidth = window.innerWidth;
    
    if (viewPortWidth <= 1350) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 1350 ? true : false);
    })
  }, [])

  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      {isMobile ? '' : <SideNav />}
      <Main clients={clients}/>
    </SplitScreen>
  );
}

export default App;
