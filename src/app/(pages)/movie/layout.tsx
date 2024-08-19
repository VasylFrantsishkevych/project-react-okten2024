type Props = { children: React.ReactNode}
import styles from './layout.module.css';

const UsersLayout = ({children}: Props) => {
   return (
      <div className={styles.wrap}>
         {children}
      </div>
   )
}
export default UsersLayout;