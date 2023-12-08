import {useContext} from 'react'
import Card from './Card'
import RobotContext from '../context/RobotContext'
import Spinner from './Spinner'


function CardList() {
    const {robot, isLoading} = useContext(RobotContext)
  return isLoading ? <Spinner/> :(
    <div className="grid grid-cols-1 card md:grid-cols-2 lg:grid-cols-3">

        {(robot.length > 0 && !isLoading) ?  robot.map((item)=> (<Card key={item.id} item = {item}/>)) : <p className='text-center text-2xl p-3'>No Robot is Found with this name</p>}
     
    </div>
  )
}

export default CardList
