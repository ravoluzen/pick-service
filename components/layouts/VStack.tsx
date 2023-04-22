import React from 'react'
import { StackProps } from '../../models'

const VStack: React.FC<StackProps> = ({className, children}) => {
  return (
    <section className={`p-2 flex flex-col ${className}`}>
        {children}
    </section>
  )
}

export default VStack