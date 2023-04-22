import VStack from "../layouts/VStack"

type ContentTileProps = {
    label: string,
    content: string,
  }
  
export const ContentTile = (props: ContentTileProps) => {
    return (
        <VStack className='w-full md:flex-row p-2 gap-4 md:p-4 border shadow-md'>
            <p className='font-bold w-1/2'>{props.label}</p>
            <p className='font-bold w-1/2 text-purple-600'>{props.content}</p>
        </VStack>
    )
}