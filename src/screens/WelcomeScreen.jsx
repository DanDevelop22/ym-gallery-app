import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";


const WelcomeScreen = ({navigation}) => {

    return(
        <ScrollView style={{ flexGrow: 1 }}>
            <View className='flex-1 mt-10 px-5 pb-3'>
                <View className='flex-[1] items-center'>
                    <Text className='font-[DMSansBold] uppercase text-center text-[18pt] mb-[16px] text-gray-800'>YM gallery</Text>
                    <Image alt='welcome' source={require('../../assets/images/welcome.png')} resizeMode='contain' className='h-[250px]'></Image>
                </View>
                <View className=' items-center mt-[32px] flex-1'>
                    <Text className='font-[DMSansBold] text-[22pt] text-gray-800'>Bienvenido</Text>
                    <Text className='text-center font-[DMSansRegular] text-[16pt] text-gray-500'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
                    <Pressable className='my-[24px] flex-row flex-wrap justify-center' onPress={() => navigation.push("Login")}>
                            <Text className='font-[DMSansRegular] text-[15pt] text-gray-600'>¿Ya tiene un usuario? </Text>
                            <Text className='font-[DMSansBold] text-[15pt] text-orange-400 uppercase underline'>Iniciar sesión</Text>
                    </Pressable>
                    <View className='w-full'>
                        <Pressable className='bg-orange-400 p-[16px] rounded-sm w-full' onPress={()=> navigation.push('Register')}>
                            <Text className='text-center text-white uppercase'>Registrar con correo electrónico</Text>
                        </Pressable>
                        <Pressable className='border rounded-sm p-[16px] w-full mt-[16px] items-center flex-row justify-center'>
                            <Image alt='logo-google' source={require('../../assets/images/logos_google-icon.png')} className='w-[20px] h-[20px]'></Image>
                            <Text className='text-center ml-[8px] uppercase text-gray-600'>Registrar con google</Text>
                        </Pressable>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}


export default WelcomeScreen