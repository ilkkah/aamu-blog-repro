import React from 'react'

// export default ({ isroot, children }) => (
//   <div className="{isroot ? 'container-root' : ''} container">{children}</div>
// )

export default ({ isroot, children }) => {
  let classes = 'container'
 
  if (isroot) {
    classes += ' container-root'
  }

  return (
    <div className={classes}>
      <div className="container-inner">
        {children}
      </div>
    </div>
  )
}
