import React from "react";
import { View, Text, Image, Pressable, ScrollView, } from "react-native";


const Welcome = ({navigation}) => {

    return(
        <ScrollView className='bg-[#F4FFFD] flex py-16'>
            <View className='items-center flex flex-row basis-2/4'>
               
                <Image alt='image1' 
                    source={require('../../assets/images/welcome.png')} 
                    resizeMode='cover' 
                    className='basis-1/3 m-[1px] rounded-lg'
                ></Image>

                <Image alt='image2' 
                    source={require('../../assets/images/welcome2.png')} 
                    resizeMode='cover' 
                    className='basis-1/3 m-[1px] h-[320px] rounded-lg'
                ></Image>

                <Image alt='image3' 
                    source={require('../../assets/images/welcome3.png')} 
                    resizeMode='cover' 
                    className='basis-1/3 m-[1px] rounded-lg'
                ></Image>

            </View>

            <View className='flex p-8 mt-4 items-center basis-1/4'>
                <Text className='font-[UnboundedRegular] text-gray-500, text-2xl'>YM GALLERY.</Text>
                <Text className='text-center text-md mt-[8px] text-gray-400 font-[LatoRegular]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
            </View>

            <View className='flex basis-1/4 px-8'>
                <Pressable className='bg-[#FA9F42] p-[18] rounded-sm' onPress={() => navigation.push("Login")}>
                    <Text className='text-center text-sm uppercase font-[LatoRegular] text-white'>Comenzar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}


export default Welcome