import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

const TextInputScreen = () => {

    const { email, name, phone, isSubscribed, onChange, form } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <ScrollView>
                <TouchableWithoutFeedback
                    onPress={ Keyboard.dismiss }
                >
                    <View style={ styles.globalMargin }>
                        <HeaderTitle title='Text Inputs' />
                        <TextInput
                            style={ stylesScreen.input}
                            placeholder='Ingresa tu nombre'
                            placeholderTextColor={'rgba(255,255,255,0.3)'}
                            // autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={ (value) => onChange( value, 'name') }
                            keyboardType='ascii-capable'
                        />

                        <TextInput
                            style={ stylesScreen.input}
                            placeholder='Ingresa un email'
                            placeholderTextColor={'rgba(255,255,255,0.3)'}
                            autoComplete='off'
                            autoCapitalize='none'
                            onChangeText={ (value) => onChange( value, 'email') }
                            keyboardType='email-address'
                            
                        />
                        <CustomSwitch 
                            isOn={ isSubscribed } 
                            onChange={ (value) => onChange( value, 'isSubscribed') }
                            title='Suscribirme'    
                        />
                        <Text style={ styles.text }> { JSON.stringify(form, null, 4) } </Text>
                        <Text style={ styles.text }> { JSON.stringify(form, null, 4) } </Text>
                        <TextInput
                            style={ stylesScreen.input}
                            placeholder='Ingresa un número de celular'
                            placeholderTextColor={'rgba(255,255,255,0.3)'}
                            onChangeText={ (value) => onChange( value, 'phone') }
                            keyboardType='decimal-pad'
                        />

                    </View>  
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
   input:{
        color:'#fff',
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.3)',
        borderRadius: 15,
        fontSize:20,
        paddingHorizontal:10,
        marginVertical:10,
        height: 50,
        
   }
});


export default TextInputScreen