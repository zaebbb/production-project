import React from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: React.FC<VStackProps> = (props: VStackProps) => (
  <Flex {...props} direction={'column'} />
)
