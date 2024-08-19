import React, { FC } from 'react'
import styles from './UserInfo.module.css'
type IProps = {
  name: string
}

const UserInfoComponent: FC<IProps> = ({name}) => {
  return (
    <div className={styles.user_info}>{name}</div>
  )
}

export default UserInfoComponent