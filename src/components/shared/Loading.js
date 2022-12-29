import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { width, height } from '../../constants/constants'

const Loading = ({ visible }) => {
  
  if(visible)
  return (
    <View className='absolute w-screen h-screen bg-gray-100 opacity-50 justify-center'>
      <ActivityIndicator color={'#232324'} size={'large'} />
    </View>
  )
}

export default Loading