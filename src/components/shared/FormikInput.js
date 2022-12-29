import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useField } from 'formik'

const FormikInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <TextInput value={field.value} onChangeText={(value) => helpers.setValue(value)} {...props}></TextInput>
    )
}

export default FormikInput