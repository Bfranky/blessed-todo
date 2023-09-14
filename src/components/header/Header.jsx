import React,{useState} from 'react'
import { BsRocketFill } from "react-icons/bs";
import { AiOutlinePlusCircle} from "react-icons/ai";
import styles from './Header.module.css'



function Header({handleAddTask}) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
      event.preventDefault();
  
      handleAddTask(title);
      setTitle('');
    }
  
    function onChangeTitle(event) {
      setTitle(event.target.value);
    }
  
  return (

    <header className={styles.header}>
     <div className={styles.to}><BsRocketFill size={50} color='blue'/> TODO</div>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button>Create <AiOutlinePlusCircle size={25} /></button>
      </form>
    </header>
  )
}

export default Header