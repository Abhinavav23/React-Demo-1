import React from 'react';
import Styles from './ModuleCssComp.module.css'

export const ModuleCssComp = () => {

  return (
   <>
    <div className={Styles.theme1}>Theme 1 from module css</div>
    <div className={Styles.theme1}>Theme 1 from parent</div>
    <div className={Styles.theme2}>Theme2</div>
   </>
  )
}
