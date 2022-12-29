import { View, Text, FlatList, SafeAreaView, Animated, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ON_BOARD_HOME, ON_BOARD_PROFILE, ON_BOARD_SEARCH, height, width } from '../../constants/constants'
import TextButton from '../shared/TextButton'
import { current } from '@reduxjs/toolkit'

const data = [
    {
        id: '1',
        image: ON_BOARD_HOME,
        title: 'Principal',
        description: 'Pick colors from an image, sampler, or spectrum. Convert HEX, RGB, HSL, HSV, CMYK, HTML/CSS colors. Select colors from a PNG, JPEG,'
    },

    {
        id: '2',
        image: ON_BOARD_SEARCH,
        title: 'Busqueda',
        description: 'Pick colors from an image, sampler, or spectrum. Convert HEX, RGB, HSL, HSV, CMYK, HTML/CSS colors. Select colors from a PNG, JPEG,'
    },

    {
        id: '3',
        image: ON_BOARD_PROFILE,
        title: 'Perfil',
        description: 'Pick colors from an image, sampler, or spectrum. Convert HEX, RGB, HSL, HSV, CMYK, HTML/CSS colors. Select colors from a PNG, JPEG,'
    },

]

const Onboarding = ({ navigation }) => {

    const scrollX = new Animated.Value(0)
    const flatListRef = React.useRef()

    const Dots = () => {
        const indexPosition = Animated.divide(scrollX, width)
        return (
            <View className='flex-row items-start -mt-5 justify-center'>
                {data.map((item, index) => {
                    const dotColor = indexPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: ['#66666b', '#232324', '#66666b'],
                        extrapolate: 'clamp'
                    })

                    const dotWidth = indexPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [10, 30, 10],
                        extrapolate: 'clamp'
                    })

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            className='rounded-full mx-[6] h-[10]'
                            style={{ width: dotWidth, backgroundColor: dotColor }}
                        />
                    )
                })}
            </View>

        )
    }

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 mt-5' >
                <View className='flex-row p-[24]  justify-center'>
                    <Text className='font-[UnboundedMedium] text-xl'>YM GALLERY</Text>
                </View>
                <Animated.FlatList
                    ref={flatListRef}
                    horizontal
                    pagingEnabled
                    data={data}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [
                            { nativeEvent: { contentOffset: { x: scrollX } } }
                        ], { useNativeDriver: false }
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <View>
                                    <Image
                                        source={item.image}
                                        resizeMode="contain"
                                        style={{
                                            width: width,
                                            height: width * 0.8,
                                        }}
                                    >
                                    </Image>
                                </View>
                                <View className='flex-1 items-center w-screen px-[24] justify-start'>
                                    <Text className='text-center text-primary text-2xl font-[LatoBold]'>{item.title}</Text>
                                    <Text className='text-center text-gray-500 font-[LatoRegular] mt-[8] text-sm'>{item.description}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
                <View className='h-[110px]'>
                    <View className='flex-1 justify-between'>
                        <Dots />

                        <View className='flex flex-row justify-between p-[24]'>
                            <TextButton label="Saltar" buttonContainerStyle={{
                                backgroundColor: null

                            }}
                                labelStyle={{
                                    color: '#232324',
                                }}

                                onPress={() => navigation.replace('Login')}
                            >

                            </TextButton>
                            <TextButton label="Siguiente" buttonContainerStyle={{
                                padding: 16,
                                width: 150,
                                borderRadius: 3
                            }}
                            

                                onPress={() => {
                                    let index = Math.ceil(Number(scrollX._value / width))

                                    if (index < data.length - 1) {
                                        flatListRef?.current?.scrollToIndex({
                                            index: index + 1,
                                            animated: true
                                        })
                                    } else {
                                        navigation.replace('Login')
                                    }
                                }}
                            >

                            </TextButton>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding