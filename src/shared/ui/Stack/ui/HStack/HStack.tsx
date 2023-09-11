import React from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

/**
 * Данный компонент устарел, используйте новый UI-kit
 * @deprecated
 * */
export const HStack: React.FC<HStackProps> = (props: HStackProps) => (
  <Flex {...props} direction={'row'} />
)
