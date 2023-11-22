import React  from 'react'
import style from './Error.module.css'
import SimpleBottomNavigation from '../component/HeaderBar'


const ErrorPage = () => {
    
  return (
    <div className={style.errorNav}>
    <SimpleBottomNavigation />
    <div className={style.pageError}>
      <h1>Page not found</h1>
    </div>
    </div>
  )
}

export default ErrorPage
