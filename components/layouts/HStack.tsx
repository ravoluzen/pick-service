import { StackProps } from '../../models'

const HStack: React.FC<StackProps> = ({className, children}) => {
  return (
    <section className={`p-2 flex gap-2 ${className}`}>
        {children}
    </section>
  )
}

export default HStack