import React from 'react';
import { View } from 'react-native';
interface Props {
    noBorder?: boolean
}

export const ItemSeparator = ({ noBorder = false }: Props ) => {
    return(
        <View
            style={{
                borderBottomWidth: noBorder ? 0 : 1,
                borderBottomColor:'#fff',
                opacity:0.5,
                width:'100%',
                marginVertical:5
            }}
        >

        </View>
    )
}