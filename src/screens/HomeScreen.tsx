import React from 'react'
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

const HomeScreen = () => {

    return (
        <View style={{
            
            flex:1,
            ...styles.globalMargin,
        }}>
            
            <FlatList
                data = { menuItems }
                renderItem = { ({ item }) => <FlatListMenuItem menuItem ={ item } /> }
                keyExtractor = { (item) => item.name }
                // StickyHeaderComponent={ renderListHeader }
                ListHeaderComponent={ () => <HeaderTitle  title='Opciones de Menú'  /> }
                ItemSeparatorComponent = {() =>  <ItemSeparator /> }
            />
        </View>   
    )
}
export default HomeScreen