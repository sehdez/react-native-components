import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

import prompt from 'react-native-prompt-android'

import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {

    const mostrarAlerta = () =>
    Alert.alert(
      'Titulo de Alerta',
      "Mensaje ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
        { text: "Tal vez", onPress: () => console.log("TAL VEZ Pressed") }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("Dismiss Pressed")
      }
    );

    const mostrarPropmp = () => {
        Alert.prompt(
            '¿Está seguro',
            'Subtitulo',
            ( valor: string ) => console.log('info', valor),
            'default'
        )
    }

    const mostrarPropmptAndroid = () => {
        prompt(
            'Title',
            'Ingresa un valor',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: valor => console.log('OK Pressed, valor: ' + valor)},
            ],
            {
                type: 'email-address',
                cancelable: false,
                defaultValue: '',
                placeholder: 'placeholder'
            }
        );
    }


    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Alertas' />
            <TouchableOpacity 
                style={ styles.button } 
                onPress={mostrarAlerta}
                activeOpacity={0.7}
                >
                <Text style={ styles.buttonText }>Disparar Alerta</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.button } 
                onPress={mostrarPropmptAndroid}
                activeOpacity={0.7}
                >
                <Text style={ styles.buttonText }>Disparar Prompt</Text>
            </TouchableOpacity>
        </View>   
    )
}

export default AlertScreen