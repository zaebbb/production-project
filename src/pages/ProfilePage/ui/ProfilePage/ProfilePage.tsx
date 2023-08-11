import React from 'react'
import { useParams } from 'react-router-dom'
import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import {
  EditablePofileCard,
} from '@/features/EditablePofileCard'

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
