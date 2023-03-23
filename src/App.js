import React, { useTransition } from 'react'
import logo from './logo.svg';
import { lazyLoad } from './lazyLoad';
import './App.css';
// import TodaysDay from './TodaysDay';
// const TodaysDay = React.lazy(() => import('./TodaysDay'))
const TodaysDay = lazyLoad('./TodaysDay')


function App() {
  const [isPending, startTransition] = useTransition()
  const [showTodayDay, setShowTodayDay] = React.useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => { startTransition(() => { setShowTodayDay(prev => !prev) }) }}>What is today?</button>
        {isPending && "loading"}
        {/* {showTodayDay && <TodaysDay />} */}
        <React.Suspense fallback="loading...">{showTodayDay && <TodaysDay />}</React.Suspense>
      </header>
    </div>
  );
}

export default App;
