import {useContext} from 'react'
import RobotContext from '../context/RobotContext'
function SearchRobot() {
    const {onSearchInput} = useContext(RobotContext)
  return (
    <div className='text-center'>

        <input type="search" name="" id="" className='search-input p-2 rounded-xl w-60' placeholder='serach for robot' onChange={(e)=> onSearchInput(e)} />
      
    </div>
  )
}

export default SearchRobot
