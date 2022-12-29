import { View, Text, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'

import { IMG_WELCOME, width, height, } from '../../constants/constants'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const Welcome = ({ navigation }) => {
    return (
        <ScrollView className='bg-[#000]' contentContainerStyle={{ flex: 1, backgroundColor: '#000' }}>

            <ImageBackground
                source={IMG_WELCOME}
                resizeMode='cover'
                className='w-full'
                style={{ height: height < 700 ? height * 0.6 : height * 0.7 }}
            >
                <View className='flex-1 justify-end'>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', '#000']}
                        style={{
                            width: '100%',
                            height: 150,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    >

                    </LinearGradient>
                </View>
            </ImageBackground>
            <View className='px-[24] flex-1 justify-center py-[24]'>
                <Text className='text-gray-100 text-center text-2xl font-[UnboundedMedium]'>
                    YM GALLERY
                </Text>
                <Text className='text-gray-400 text-sm text-center font-[LatoRegular] mt-[16]'>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown
                </Text>
                <TouchableOpacity className='w-full bg-orange-400 py-5 rounded-sm mt-6' onPress={() => navigation.replace('Onboarding')}>
                    <Text className='text-gray-100 text-center font-[LatoRegular]'>
                        Comenzar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Welcome