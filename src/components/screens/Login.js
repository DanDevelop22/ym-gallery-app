import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Formik } from "formik";
import { loginValidationSchema } from "../../validations/validationSchema"
import Fontisto from "@expo/vector-icons/Fontisto"
import Feather from "@expo/vector-icons/Feather"

import Home from "./Home";

const initialParams = {
    email: "usuario@gmail.com",
    password: "usuario24$",
};

const Login = ({ navigation }) => {

    const [secureTextPassword, setSecureTextPassword] = useState(false)

    return (
        <ScrollView className='bg-[#F4FFFD] flex py-24'>
            <View className='flex-1 px-5'>

                <View>
                    <Text className=' text-primary text-center text-3xl font-[LatoBold]'>Bienvenido</Text>
                    <Text className=' text-center text-gray-500 text-sm font-[LatoRegular]'>Por favor introduzca sus datos para iniciar sesión</Text>
                </View>

                <Formik
                    initialValues={initialParams}
                    validationSchema={loginValidationSchema}
                    onSubmit={async (values) => {
                        setLoadingModal(true);
                        try {
                            await AuthService.login(values.email, values.password)
                                .then((res) => {
                                    var data = res.data;
                                    console.log(data)
                                    AuthService.setToken(data.token);
                                    AuthService.setEmail(data.email);
                                    AuthService.setUsername(data.username);
                                    navigation.navigate("Home");
                                })
                                .catch((error) => {
                                    console.log(error.response.data);
                                    var data = error.response.data;
                                    Object.entries(data).forEach(([key, value]) => {
                                        Alert.alert(`${key}: ${value}`);
                                    });
                                });
                        } catch (error) {
                            console.log(error);
                        } finally {
                            setLoadingModal(false);
                        }
                    }}
                >
                    {({ handleSubmit }) => {
                        return (
                            <View>
                                <View className='flex-row items-center mt-[32]'>
                                    <TextInput placeholder="Escriba su correo electrónico" placeholderTextColor={'gray'} color='gray' className='bg-gray-100 rounded-sm p-[16px] w-full font-[LatoRegular]'></TextInput>
                                    <View className='absolute right-0 p-[16px]'>
                                        <Fontisto name='email' size={15} color='gray' />
                                    </View>
                                </View>
                                <View className='flex-row items-center mt-[16px]'>
                                    <TextInput secureTextEntry={!secureTextPassword} color='gray' placeholder="*************" className='bg-gray-100 rounded-sm p-[16px] w-full font-[LatoRegular]'></TextInput>
                                    <Pressable className='absolute right-0 p-[16px]' onPress={() => setSecureTextPassword(!secureTextPassword)}>
                                        <Feather name={secureTextPassword ? 'eye-off' : 'eye'} size={15} color='gray' />
                                    </Pressable>
                                </View>
                                <Pressable className='w-full py-[16px]' onPress={() => navigation.push("RecoverPass")}>
                                    <Text className='text-right font-[LatoRegular] text-gray-600'>¿Ha olvidado su contraseña?</Text>
                                </Pressable>
                                <Pressable className='bg-primary rounded-sm' onPress={() => navigation.replace("Home")}>
                                    <Text className='text-center text-sm text-white py-[16px] font-[LatoRegular]'>Iniciar Sesión</Text>
                                </Pressable>
                            </View>
                        )
                    }}
                </Formik>
                <View className='flex-1'>
                    <View className='flex-row justify-between items-center mt-[64px]'>
                        <View className='border border-gray-400 w-[71px]'></View>
                        <Text className='font-[LatoRegular] text-gray-500'>Puede continuar con</Text>
                        <View className='border w-[71px]  border-gray-400'></View>
                    </View>
                </View>

                <View className='flex-row mt-[24px] justify-around'>

                    <Pressable className='bg-blue-500 p-[16px] mr-4 wx-15 rounded-sm  basis-1/2 items-center flex-row justify-center' onPress={() => navigation.push('Register')}>
                        <Image alt='facebook' source={require('../../../assets/images/facebook.png')} className='w-[18px] h-[18px]'></Image>
                        <Text className='ml-[8px] text-center text-white font-[LatoRegular] '>Facebook</Text>
                    </Pressable>

                    <Pressable className='p-[16px] rounded-sm bg-gray-100 basis-1/2 items-center flex-row justify-center' onPress={() => navigation.push('Register')}>
                        <Image alt='facebook' source={require('../../../assets/images/google.png')} className='w-[18px] h-[18px]'></Image>
                        <Text className='ml-[8px] text-center text-gray-600 font-[LatoRegular] '>Google</Text>
                    </Pressable>

                </View>

                <Pressable className='my-[24px] flex-row flex-wrap justify-center'>
                    <Text className='font-[LatoRegular]  text-gray-600'>¿Aun no tiene un usuario? </Text>
                    <Pressable onPress={() => navigation.push("Register")}>
                        <Text className='font-[LatoBold]  text-primary'>Registrese</Text>
                    </Pressable>
                </Pressable>

            </View>
        </ScrollView>
    )
}

export default Login