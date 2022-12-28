import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress }) => {
    return (
        <TouchableOpacity className='items-center justify-center bg-primary' style={buttonContainerStyle} onPress={onPress}>
            <Text className='text-white' style={labelStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton