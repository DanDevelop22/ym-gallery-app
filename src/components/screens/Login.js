import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView, Alert } from "react-native";
import { Formik } from "formik";
import { loginValidationSchema } from "../../validations/validationSchema"
import Fontisto from "@expo/vector-icons/Fontisto"
import Feather from "@expo/vector-icons/Feather"
import FormikInput from "../shared/FormikInput";
import { login } from "../../services/authenticationService";
import Loading from "../shared/Loading";

const initialParams = {
    username: "usuario@gmail.com",
    password: "usuario24$",
};

const Login = ({ navigation }) => {

    const [secureTextPassword, setSecureTextPassword] = useState(false)
    const [loadingVisible, setLoadingVisible] = useState(false)

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
                        setLoadingVisible(true);
                        try {
                            await login(values)
                                .then((res) => {
                                    var data = res.data;
                                    console.log(data)
                                    navigation.replace("Tabs");
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
                            setLoadingVisible(false);
                        }
                    }}
                >
                    {({ handleSubmit }) => {
                        return (
                            <View>
                                <View className='flex-row items-center mt-[32]'>
                                    <FormikInput name='username' placeholder="Escriba su correo electrónico" placeholderTextColor={'gray'} color='gray' className='bg-gray-100 rounded-sm p-[16px] w-full font-[LatoRegular]'/>
                                    <View className='absolute right-0 p-[16px]'>
                                        <Fontisto name='email' size={15} color='gray' />
                                    </View>
                                </View>
                                <View className='flex-row items-center mt-[16px]'>
                                    <FormikInput name='password' secureTextEntry={!secureTextPassword} color='gray' placeholder="*************" className='bg-gray-100 rounded-sm p-[16px] w-full font-[LatoRegular]'/>
                                    <Pressable className='absolute right-0 p-[16px]' onPress={() => setSecureTextPassword(!secureTextPassword)}>
                                        <Feather name={secureTextPassword ? 'eye-off' : 'eye'} size={15} color='gray' />
                                    </Pressable>
                                </View>
                                <Pressable className='w-full py-[16px]' onPress={() => navigation.push("RecoverPass")}>
                                    <Text className='text-right font-[LatoRegular] text-gray-600'>¿Ha olvidado su contraseña?</Text>
                                </Pressable>
                                <Pressable className='bg-primary rounded-sm' onPress={handleSubmit}>
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
            <Loading visible={loadingVisible}/>
        </ScrollView>
    )
}

export default Login