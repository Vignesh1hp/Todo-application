import React from 'react'

const Tabs = () => {
  const tabs = ['All','Open','Completed'];
  return (
    <nav className='tab-container'>
      {
        tabs.map((tab,index)=>{
          return(
            <button key={index} className='tab-button'>
              <h4>{tab}<span>(0)</span></h4>
            </button>
          )
        })
      }
    </nav>
  )
}

export default Tabs