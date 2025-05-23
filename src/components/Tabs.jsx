import React from 'react'

const Tabs = ({todos,selectedTab,setSelectedTab}) => {
  const tabs = ['All','Open','Completed'];
  return (
    <nav className='tab-container'>
      {
        tabs.map((tab,index)=>{
          const numOfTasks = tab === 'All'?
          todos.length :
          tab === 'Open'?
          todos.filter(todo=> !todo.complete).length:
          todos.filter(todo=> todo.complete).length;
          return(
            <button onClick={()=>{
              setSelectedTab(tab)
            }} key={index} className={'tab-button ' + (tab === selectedTab ? ' tab-selected': ' ')}>
              <h4>{tab}<span>({numOfTasks})</span></h4>
            </button>
          )
        })
      }
      <hr />
    </nav>
  )
}

export default Tabs