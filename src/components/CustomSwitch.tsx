import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler';
import { Platform, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
    title?: string;
}


const CustomSwitch = ( { isOn, onChange, title }: Props ) => {

    const [ isEnabled, setIsEnabled ] =  useState( isOn );
    const toggleSwitch = () => {
        setIsEnabled ( !isEnabled )
        onChange( !isEnabled )
    };
    if ( title ){
        return(
            <View style={{
                flexDirection:'row'
            }}>
                <Text style={ styles.text }> {title}</Text>
                <View style={{flex:1}} ></View>
                <Switch
                    trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
                    thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        )
    } else{
        
        return (
            <Switch
                trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
                thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        )
    }

}

export default CustomSwitch