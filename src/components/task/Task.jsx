import styles from './Task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

function Task({ task, onDelete, onComplete}) {
  return (
    <div className={styles.task}>
    <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
      {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
    </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
    
      {/* <button className={styles.durationButton} onClick={() => ondurationchange(task.id)}>
        </button> */}
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}

export default Task