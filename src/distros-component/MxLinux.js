import React from 'react'
import Styles from '../distros-component/MxLinux.css'

function MxLinux() {
  return (
  <>
    <div className='mxlinuxtitle'>
      <h1>MX Linux</h1>
    </div>
    <div className='mxlinux-downloads-container'>
      <div className='dwnd-card-title'>
        <h1>XFCE</h1>
        <div className='download-link'>
          <a href='www.google.com'>MX-21.3 X64 BITS <i class="fa-solid fa-download"></i></a>
        </div>
        <div className='download-link'>
          <a href='www.google.com'>MX-21.3 X32 BITS <i class="fa-solid fa-download"></i></a>
        </div>
      </div>
    </div>
  </>
  )
}

export default MxLinux
