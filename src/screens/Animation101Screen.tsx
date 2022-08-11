import React from 'react'
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import { useAnimations } from '../hooks/useAnimations';

const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, top } = useAnimations();


    return (
        <View style={ styles.container }>
            <Animated.View style={{ 
                ...styles.purpleBox,
                opacity,
                transform: [{
                    translateY:top
                }],

                }}></Animated.View>

                <TouchableOpacity
                style={ styles.button }
                    onPress={fadeIn}
                >
                    <Text >FadeIn</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={ styles.button }
                    onPress={fadeOut}
                >
                    <Text >FadeOut</Text>
                </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    purpleBox:{
        backgroundColor:'#5856d6',
        width:150,
        height:150,
   },
   button: {
        width: 70,
        height:30,
        margin:5,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'

   }
});

export default Animation101Screen
