import React from 'react'
import './nav.css'
const Navv = () => {
  return (
    <section className='navvbar'>
    <div className='nav-items'>
    <div className='sidebar'>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZPQrCQBBGH3oZfy5h54lEBC3VaC0eQ8SUFrbqmSIrwqbYJQm6hk2U78F0C9nHzJdiFoQQ4h8ZAhsgBc6RKgUSYFCHQBfYAg/ANFSZFep8I7JtUMB49ZIJHqcmO2EKOhM0ZkkLLm+8WoWIpJEudwBmwNTWAriWnH3d6WMuESR2FT+Za8H5S1tFxhXfn/+SyKji+xOJeKgjaLQclBEfZQRlxEEZ8VFGUEYclBEfZQRlxEEZ8VFGUEYclBEfrYN4PyN7yhd0t7rWQbFWpseClem95OwpRGQdSeSTWoaIDOwq37SkMqBPIJtf70ZOx45Yk53JrMRXT285fSsU8zH0ZB92enUICCEEreIJtHKat+RDx3IAAAAASUVORK5CYII=" alt="show-right-side-panel"></img>
    </div>
    <div className='bat-info'>
    <div>
    <h2 className='nav-headings'>BatsMan (Striker)</h2>
    <select>
        <option value={'Virat Bhai'}>Virat Bhai</option>
        <option value={'Dhoni Bhai'}>Dhoni Bhai</option>
        <option value={'Tendulkar Bhai'}>Tendulkar Bhai</option>
    </select>
    </div>
    </div>
    <div className='bat-images'>
    <img className='right-arrow' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhUlEQVR4nO2UwQmEMBBF32EtQRAEwXLExuxirWLxqjV4EEQ8aB9/iSgsC94yIpgH/zbMg/wkEAjcAkEj6ASxlWASSNALEgtBtQtcBkHqc3kkqH8ELqMgOwZKwfo34COzIHeCxWC5jk4uERRGknk7Ig8lvwTv05Jvf02vemgfQWv2VQQezhcRv/nBunGz1AAAAABJRU5ErkJggg==" alt="long-arrow-right" />
    <img className='left-arrow' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhUlEQVR4nO2UwQmEMBBF32EtQRAEwXLExuxirWLxqjV4EEQ8aB9/iSgsC94yIpgH/zbMg/wkEAjcAkEj6ASxlWASSNALEgtBtQtcBkHqc3kkqH8ELqMgOwZKwfo34COzIHeCxWC5jk4uERRGknk7Ig8lvwTv05Jvf02vemgfQWv2VQQezhcRv/nBunGz1AAAAABJRU5ErkJggg==" 
     alt="long-arrow-right" 
     style={{transform:"rotate(180deg)"}} />
    </div>
    <div className='bat-info'>
    <div>
    <h2 className='nav-headings'>BatsMan (Non-Striker)</h2>
    <select>
   <option value={'Virat Bhai'}>Virat Bhai</option>
        <option value={'Dhoni Bhai'}>Dhoni Bhai</option>
        <option value={'Tendulkar Bhai'}>Tendulkar Bhai</option>
    </select>
    </div>
    </div>
    <div className='bat-info'>
    <div>
    <h2 className='nav-headings'>Bowler</h2>
    <select>
   <option value={'Virat Bhai'}>Virat Bhai</option>
        <option value={'Dhoni Bhai'}>Dhoni Bhai</option>
        <option value={'Tendulkar Bhai'}>Tendulkar Bhai</option>
    </select>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Navv