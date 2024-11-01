import React from 'react'
import { About, Clients, FAQ, Footer } from '../../components'
import styles from '../../style'

function AboutPage() {
  return (
    <div>
      <About/>
      <FAQ/>
      <div className={` bg-white w-full overflow-hidden ${styles.paddingY} `}>
      <Clients />
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage