import React from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import { useAnimations } from '../hooks/useAnimations';
import { useState } from 'react';

interface Props {
    uri   : string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ( { uri, style }: Props ) => {

    const { opacity, fadeIn } = useAnimations();
    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent:'center',
            alignItems: 'center'
        }}>
            {
                isLoading &&
                    <ActivityIndicator
                        color='#fff'
                        style= {{position:'absolute'}}
                        size={30}
                    />
            }

            <Animated.Image 
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style ={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}

export default FadeInImage