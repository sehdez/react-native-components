import React, { useState } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled( previousState => !previousState);

    const [ state, setState ] = useState({
        isActive: false,
        isHappy: false,
        isHungry: false
    })
    const { isHappy, isHungry, isActive } = state
    const onChange = ( value: boolean, field: keyof typeof state ) => {
        setState({
            ...state,
            [ field ]: value
        })
    }
    return (


        <View style = { styles.container}>
            <HeaderTitle title='Switches' />
            
            <View style={styles.switch}>
                <Text style={ styles.text }>IsActive:</Text>
                <CustomSwitch isOn = { isActive } onChange = { ( value ) => onChange( value, 'isActive' ) }/>
            </View>

            <View style={styles.switch}>
                <Text style={ styles.text }>isHappy:</Text>
                <CustomSwitch isOn = { isHappy } onChange = { ( value ) => onChange( value, 'isHappy' ) }/>
            </View>

            <View style={styles.switch}>
                <Text style={ styles.text }>isHungry:</Text>
                <CustomSwitch isOn = { isHungry } onChange = { ( value ) => onChange( value, 'isHungry' ) }/>
            </View>

            <Text style={ styles.text }> { JSON.stringify(state, null, 4) } </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20
    },
    switch:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        marginBottom:10,
        color:'#fff',
        fontSize: 30
    }
  });


export default SwitchScreen
