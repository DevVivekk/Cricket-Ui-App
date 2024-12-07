'use client';
import Navv from '@/components/nav/nav'
import Score from '@/components/scorecard/score'
import React, { useState } from 'react'
import styles from './page.module.css'
import Run from '@/components/runs/run'
import JoinRoomPopup from '@/assets/popup/popup_modal';
import Livescore from '@/components/livescores/livescore';
const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className={styles['home']}>
    <div>
    <Navv />
    <Run />
    <div className={styles['live-scores-show']}>
      <button onClick={openPopup} className={styles["open-popup-btn"]}>
        Join Room
      </button>
      <Livescore />
    </div>
    {isPopupOpen?<JoinRoomPopup isOpen={isPopupOpen} onClose={closePopup} />:null}
    </div>
    <Score />
    </div>
  )
}

export default Page