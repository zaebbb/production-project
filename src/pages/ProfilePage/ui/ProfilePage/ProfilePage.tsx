import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page'
import {
  EditablePofileCard,
} from 'features/EditablePofileCard'
import { useParams } from 'react-router-dom'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  return (
    <Page className={classNames(cls.ProfilePage, {}, [className])}>
      <EditablePofileCard id={String(id)} />
    </Page>
  )
}

export default ProfilePage
