import React, { useEffect, useContext } from 'react'
import Button from '../components/Button'
import CountdownAnimation from '../components/CountDownAnimation.jsx'
import SetPomodoro from '../components/SetPomodoro'
import { SettingsContext } from '../context/SettingsContext'

const Pomodore = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Trabalho" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Descanso" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>

        </ul>
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        <Button title="Settings" _callback={SettingsBtn} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}

export default Pomodore;