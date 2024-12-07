import React from 'react'
import './row.css'
const Score = () => {
  return (
    <div className='score-comp'>
    <div className='scorecard'>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVR4nO3YSwrCMBRG4eMOVQwZ6OoVQfGxgQqVQgsiSe0zucX/QGdJuR+hgxSUUkoppZTqmQPuwBlYY68NcAGegI8tWgE3oKyfom1xhnw9UzPfo5452PVjoSWM/0KU9azRtoENuTE+MlM1a2u7wMYXcCDPN1sEZtl3fYEFjBuLsIBxUyFyYtzUiBwYNxciJWZ2RApMMsScmOSIOTDZEFNisiOmwJhBjMGYQwzBmEX0wZhHdMEsBvHr7mDtjjP4ZBZzEl0xi0LEMItENFW/lE7A0ejvJaWUUkop9U+9AdnJ7S7GX9jsAAAAAElFTkSuQmCC" alt="expand-arrow--v1"></img>
    <h2>Scorecard</h2>
    </div>
    <div className='full-score'>
    <div className='head-score'><span>View Full Score Card</span></div>
    <section className='country-wrap'>
    <div className='country'>
        <h2>IND</h2>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2VPQ6CQBCF51gUngV6Qi23IKHjGkqhDQewBCw8gLh0VFs/M1sZfzoQx7wveclkt5k3OzMrQgghhPwDqASWJDRQ8QXAFnpk7ZYAh7hav6rgGq0Mf2Tee1iSLGnAuQnbbYM0PQTleRPOTBhwbkKS1DifHdr2iq4bQhzH+1lNyFIGtPKacF1fUJanII37/hbuft5Amh7RtkNIPMuOQRrra+idEQPXNwYGGwbyvEHX3V5aSM/07ucNODchjneh57XqOsQa6xCPo4Eh9h/W6JzJ+6UNfEPyTFRsYElCAwVfAGyhR9ZuiYhDXKxf1YhrtDD8kRFCCCFikDtgAlonA0la6QAAAABJRU5ErkJggg==" alt="india" />
        <div className='score-stats'>
        <span>297 / 7</span>
        <span>Over 20.0</span>
        </div>
    </div>
    <span className='versus'>vs</span>
    <div className='country'>
        <h2>BAN</h2>
        <div className='image-wrapper'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nO2YTU7DMBCFLRC9AouySrgBZdfsqNJFk1TUwALviW9SoLcAwZH4LXdAsB/0onpDpDbEVpzQedKTosiJ5nPs8VOEYLFYLBbrX0gr6pRL8l2QZgDlf1Y1LyH155no5YouEkkPgwk9h2P67o8K4xr3zlNZjGnlF5ilkpZBTLR/stbvwZhOU9kegN1c0WKYbiz8t2+jjHbyFgAsahRvfB1N/QLMUlm7eONpJv0A9HJVrGdbgI8gtt/YJVV4CN3GtnjjM9tNXVKFhx6PEmcA94OkeYDXcHPLrGqcE6JpgK/+yBkA3iW6DPB54AHg5dC+Axk/hXHzAMg2rgDujifNAyCYuQKQPtro3tUlvTnoREtfB5nQqkiVtgCZryghVkaqrFv8PMrsi9eWAIjEN8OsVhJtRZwWKyNVVtkTGONk2WjHAGZjI5gh26C347CDcY176DYY47R4zf+FlPsZ1fwFlP9Z1Vu9B1gsFovFEt3TDxoQ0OWOy8NeAAAAAElFTkSuQmCC" alt="bangladesh" /></div>
        <div className='score-stats'>
        <span>164 / 7 <span className='astrick'>*</span></span>
        <span>Over 20.0</span>
        </div>
    </div>
    </section>
    <div className='final-score'><span>India Won by 133 runs</span></div>
    </div>

    <div className='current-score'>
  <table>
    <thead>
      <tr>
        <th>Batsman</th>
        <th>R</th>
        <th>B</th>
        <th>4s</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Tanzim Hasan Sakib <span className='playing'>*</span></td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Virat</td>
        <td>8</td>
        <td>8</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Dhoni</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</div>

<div className='current-score-bowler'>
  <table>
    <thead>
      <tr>
        <th>Bowler</th>
        <th>O</th>
        <th>M</th>
        <th>R</th>
        <th>W</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Tanzim Hasan Sakib <span className='playing'>*</span></td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Virat</td>
        <td>8</td>
        <td>8</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Dhoni</td>
        <td>2</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</div>
<div className='bowls'>
 <h2>24 Balls</h2>
 <div className='ball-count'>
  <span>9</span>
  <span>6</span>
  <span>5</span>
  <span>1</span>
  <span>2</span>
  <span>1</span>
  <span>4</span>
  <span>11</span>
  <span>2</span>
  <span>2</span>
  <span>1</span>
  <span>4</span>
  <span>11</span>
  <span>2</span>
 </div>
</div>
<div className='extra-bowls'>
 <h2>Extra</h2>
 <div className='ball-count'>
 11 (b,0,lb,4,wd,6,nb,1,P,0)
 </div>
</div>
 <div className='search-teams'>
 <div className='select-menu'>
 <select>
   <option value={'Virat Bhai'}>Virat Bhai</option>
        <option value={'Dhoni Bhai'}>Dhoni Bhai</option>
        <option value={'Tendulkar Bhai'}>Tendulkar Bhai</option>
    </select>
    <select>
   <option value={'Virat Bhai'}>Virat Bhai</option>
        <option value={'Dhoni Bhai'}>Dhoni Bhai</option>
        <option value={'Tendulkar Bhai'}>Tendulkar Bhai</option>
    </select>
 </div>
 <div className="search-menu">
  <div className="input-container">
    <input type="search" placeholder="default size" />
    <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 50 50">
      <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
    </svg>
  </div>
  <img className='cross-icon' width="48" height="48" src="https://img.icons8.com/color/48/close-window.png" alt="close-window"/>
</div>
 </div>
 <div className='player-stats'>
 <div className='player-wrapper'>
 <div className='circle'><span>1</span></div>
 <div className='player-info'>
 <span>19.6</span>
 <p className='stat-para'>Nitish Kumar Reddy To Tanzim Hasan Sakib: 1 <span className='stat-info'>run.</span></p>
 </div>
 <img width={30} src='https://img.icons8.com/?size=100&id=98963&format=png&color=000000' />
 </div>

 <div className='player-wrapper'>
 <div className='circle'><span>1</span></div>
 <div className='player-info'>
 <span>19.6</span>
 <p className='stat-para'>Nitish Kumar Reddy To Tanzim Hasan Sakib: 1 <span className='stat-info'>run. Catch Drop</span></p>
 </div>
 <img width={30} src='https://img.icons8.com/?size=100&id=98963&format=png&color=000000' />
 </div>

 <div className='player-wrapper'>
 <div className='circle zero'><span>0</span></div>
 <div className='player-info'>
 <span>19.6</span>
 <div><p className='stat-para'>Nitish Kumar Reddy To Towhid Hridoy: 0</p> <span className='stat-info'>run.</span></div>
 </div>
 <img width={30} src='https://img.icons8.com/?size=100&id=98963&format=png&color=000000' />
 </div>

 <div className='player-wrapper'>
 <div className='circle'><span>1</span></div>
 <div className='player-info'>
 <span>19.6</span>
 <p className='stat-para'>Nitish Kumar Reddy To Tanzim Hasan Sakib: 1 <span className='stat-info'>run.</span></p>
 </div>
 <img width={30} src='https://img.icons8.com/?size=100&id=98963&format=png&color=000000' />
 </div>
 </div>
    </div>
  )
}

export default Score