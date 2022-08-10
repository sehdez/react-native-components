import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem : MenuItem
}

const FlatListMenuItem = ( { menuItem }: Props ) => {

    const { name, component, icon } = menuItem
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress = { ()=> navigate(component as never) }
        >
            <View style={ styles.container }>
                <Icon name={ icon } size={30} color='gray' />
                <Text style={{...styles.text}}>{ name } </Text> 
                <View style={{flex:1}}></View>
                <Icon name='chevron-forward-outline' size={30} color='gray' />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text:{
        color:'white',
        fontSize:25,
        marginLeft:10,
    },
})
export default FlatListMenuItem