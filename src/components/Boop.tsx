import * as React from 'react'

const Boop = ({rotation = 0, timing = 0, children}: {rotation: number; timing: number; children: any}): JSX.Element => {
  const [isBooped, setIsBooped] = React.useState<boolean>(false);

  const style = {
    display: 'inline-block',
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform: ${timing}ms`
  }

  React.useEffect(() => {
    if(!isBooped) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    }
  }, [isBooped, timing])

  const trigger = () => {
    setIsBooped(true)
  }

return (<span onMouseEnter={trigger} style={style}>{children}</span>)
}

export {Boop}
