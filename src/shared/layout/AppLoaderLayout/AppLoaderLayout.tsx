import React, { memo } from 'react'
import { MainLayout } from '../MainLayout'
import cls from './AppLoaderLayout.module.scss'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

export const AppLoaderLayout: React.FC =
  memo(() => (
    <MainLayout
      Header={
        <HStack className={cls.header}>
          <Skeleton width={40} height={40} border={'50%'} />
        </HStack>
      }
      Content={
        <VStack gap={16} className={cls.content}>
          <Skeleton width={'70%'} height={32} border={'16px'} />
          <Skeleton width={'40%'} height={20} border={'16px'} />
          <Skeleton width={'50%'} height={20} border={'16px'} />
          <Skeleton width={'30%'} height={32} border={'16px'} />
          <Skeleton width={'80%'} height={'40%'} border={'16px'} />
          <Skeleton width={'80%'} height={'40%'} border={'16px'} />
        </VStack>
      }
      Sidebar={<Skeleton border={'32px'} width={220} height={'100%'} />}
    />
  ))
