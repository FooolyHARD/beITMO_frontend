import './App.css'
import LeftSideBar from './components/LeftSideBar'
import TopSideBar from './components/TopSideBar'
import FaceComponent from './components/FaceComponent'
import HappyLevelComponent from './components/HappyLevelComponent'
import HappinessLevel from './components/HappienesLevelComponent'
import AchievementsList from './components/AchivmentsComponent'
import StatusBar from './components/ProgressBarComponent'
import ProgressBarComponent from './components/ProgressBarComponent'
import RegistrationComponent from './components/RegistrationComponent'

function App() {
  const zalupa = 'eco';
  const array = [1,2,3,4]
  const achievementsData = [
    { title: 'Achievement 1', type: 'eco', value: 1, description: 'Описание достижения 1' },
    { title: 'Achievement 2', type: 'pro', value: 1, description: 'Описание достижения 2' },
    { title: 'Achievement 3', type: 'health', value: 3, description: 'Описание достижения 3' },
    { title: 'Achievement 4', type: 'friendly', value: 3, description: 'Описание достижения 4' },
    { title: 'Achievement 5', type: 'open', value: 3, description: 'Описание достижения 5' },
    { title: 'Achievement 6', type: 'fit', value: 3, description: 'Описание достижения 6' },

  ];
  return (
    <>
    <LeftSideBar/>
    <TopSideBar/>
    <FaceComponent imageIndex={zalupa}/>
    <HappyLevelComponent StringIndex={zalupa}/>
    <HappinessLevel happinessLevel={5} args={array}/>
    <img className='ach' src='src/img/achevements.png'/>
    <div className='achievements_holder'>
      <AchievementsList achievements={achievementsData} />
    </div>
    <button className='ach-button'/>
    <img className='bars' src='src/img/bars_plus_recs.png'/>
    <RegistrationComponent/>
    </>
  )
}

export default App;
