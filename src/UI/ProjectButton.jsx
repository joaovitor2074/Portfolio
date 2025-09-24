import styles from './projectButton.module.css'

const ProjectButton = ({ text, type,className,id, src}) => {
  return (
    <button className={`${styles.btn} ${className}`} type={type} id={id} src={src}>
      {text}
    </button>
  )
}

export default ProjectButton
