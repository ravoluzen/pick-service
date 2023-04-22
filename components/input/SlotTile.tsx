import VStack from '../layouts/VStack'

interface SlotTileProps {
    onClick: () => void;
    timeRange: string,
    serviceProvider: string,
    service: string,
    active: boolean,
}

export const SlotTile: React.FC<SlotTileProps> = ({ onClick, timeRange, serviceProvider, service, active}) => {
  return (
    <div onClick={onClick}>
        <VStack 
            className={`${active ? ' bg-purple-600 text-white': ''} w-48 rounded-lg border shadow-md cursor-pointer hover:bg-purple-600 hover:text-white`}
        >
            <p className='font-bold'>{timeRange}</p>
            <p>{serviceProvider}</p>
            <p>{service}</p>
        </VStack>
    </div>
  )
}
