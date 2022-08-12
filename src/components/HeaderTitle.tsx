import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    title:string;
    noMargin?: boolean
}

const HeaderTitle = ({ title, noMargin }: Props) => {
const { top } = useSafeAreaInsets();
    return(
        <View style={{ 
            marginTop: (noMargin) ? 0 : top+20,
            marginBottom:20 }}>
            <Text style={styles.title}>{ title }</Text>
        </View>
    )
}

export default HeaderTitle