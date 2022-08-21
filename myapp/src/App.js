import React from 'react'
import FirstChart from './components/FirstChart';
import MyChart from './components/MyChart';
const App = () => {
  return (
    <>
      <div>
        < FirstChart />
      </div>
      <div style={{ height: '15vh', width: '100vh' }}> </div>
      <div>
        <MyChart />
      </div>
    </>
  )
}
export default App;
