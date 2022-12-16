import React, {useState} from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { Formik } from "formik";
import { loginValidationSchema } from "../validations/validationschema";
import Fontisto from "@expo/vector-icons/Fontisto"
import Feather from "@expo/vector-icons/Feather"

const initialParams = {
    email: "usuario@gmail.com",
    password: "usuario24$",
};

const LoginScreen = () => {

    const [secureTextPassword, setSecureTextPassword] = useState(false)

    return(
        <View className='flex-1 px-5 mt-16'>
            <View>
                <Text className='text-[24pt] text-gray-800 text-center font-[DMSansBold]'>Iniciar Sesión</Text>
                <Text className='text-[16px] text-center text-gray-600 my-[8px] font-[DMSansRegular]'>Ingrese su correo electrónico y contraseña para comenzar a comprar</Text>
            </View>
            <Formik
                initialValues={initialParams}
                validationSchema={loginValidationSchema}
                onSubmit={ async(values) => {
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
                            <View className='flex-row items-center mt-[8px]'>
                                <TextInput placeholder="Escriba su correo electrónico" className='bg-gray-200 p-[16px] w-full font-[DMSansRegular]'></TextInput>
                                <View className='absolute right-0 p-[16px]'>
                                    <Fontisto name='email' size={15} color='gray' />
                                </View>
                            </View>
                            <View className='flex-row items-center mt-[16px]'>
                                <TextInput secureTextEntry={!secureTextPassword} placeholder="*************"  className='bg-gray-200 p-[16px] w-full font-[DMSansRegular]'></TextInput>
                                <Pressable className='absolute right-0 p-[16px]' onPress={() => setSecureTextPassword(!secureTextPassword) }>
                                    <Feather name={secureTextPassword? 'eye-off' : 'eye'} size={15} color='gray' />
                                </Pressable>
                            </View>
                            <Pressable className='w-full py-[16px]'>
                                <Text className='text-right font-[DMSansRegular]'>Recuperar contraseña</Text>
                            </Pressable>
                            <Pressable className='bg-orange-400 rounded-sm'>
                                <Text className='text-center text-white py-[16px] font-[DMSansBold] uppercase'>Iniciar Sesión</Text>
                            </Pressable>
                        </View>
                    )
                }}
            </Formik>
            <View className='flex-row justify-between items-center mt-[64px]'>
                <View className='border border-gray-400 w-[71px]'></View>
                <Text className='font-[DMSansRegular]'>Puede continuar con</Text>
                <View className='border w-[71px]  border-gray-400'></View>
            </View>
            <View className='flex-1 w-full mt-[24px]'>
                <Pressable className='bg-blue-600 p-[16px] rounded-sm w-full items-center flex-row justify-center' onPress={()=> navigation.push('Register')}>
                    <Image alt='logo-facebook' source={require('../../assets/images/log-face.png')} className='w-[18px] h-[18px]'></Image>
                    <Text className='ml-[8px] text-center text-white uppercase font-[DMSansBold] '>Continuar con facebook</Text>
                </Pressable>
                <Pressable className='border rounded-sm p-[16px] w-full mt-[16px] items-center flex-row justify-center'>
                    <Image alt='logo-google' source={require('../../assets/images/logos_google-icon.png')} className='w-[20px] h-[20px]'></Image>
                    <Text className='text-center ml-[8px] uppercase text-gray-600'>Continuar con google</Text>
                </Pressable>
            </View>
            <Pressable className='my-[24px] flex-row flex-wrap justify-center' onPress={() => navigation.push("Login")}>
                    <Text className='font-[DMSansRegular] text-[15pt] text-gray-600'>¿Ya tiene un usuario? </Text>
                    <Text className='font-[DMSansBold] text-[15pt] text-orange-400 uppercase underline'>Registrese</Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen