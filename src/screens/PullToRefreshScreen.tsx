import React from 'react'
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {

    const [ refreshing, setRefreshing ] = useState(false);
    const { top } = useSafeAreaInsets();
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout( () => {
            setRefreshing(false)
            setData('¡Actualizado!')
        }, 1500 )
    }
    return (
        <ScrollView
            refreshControl={ 
                <RefreshControl 
                    refreshing = { refreshing }
                    onRefresh  = { onRefresh }
                    progressViewOffset = {top}
                    progressBackgroundColor= '#3029BB'
                    colors={[ 'white', 'black', 'yellow', 'red' ]}
                    // IOS
                    style={{ backgroundColor: 'blue' }}
                    tintColor= 'white'
                />
            }
        >
            <View style={ styles.globalMargin } >
                <HeaderTitle title='Pull to refresh' />
                { data && <HeaderTitle title={ data } /> }

            </View>
        </ScrollView>
  )
}

export default PullToRefreshScreen