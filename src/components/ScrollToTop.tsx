import React from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({children}: any):JSX.Element => {
  const {pathname} = useLocation();

  React.useLayoutEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return (<>{children}</>)
}

export {ScrollToTop}