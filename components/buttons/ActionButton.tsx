import React from 'react'
import { ButtonProps } from '../../models'

const ActionButton: React.FC<ButtonProps> = ({title, onClick, className}) => {
  return (
    <>
        <button 
            className={`m-2 w-24 p-3 font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 shadow-lg ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    </>
  )
}

export default ActionButton