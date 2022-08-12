import React from 'react'
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

const HomeScreen = () => {

    const Separator = () => {
        return(
            <View
                style={{
                    borderBottomWidth:1,
                    borderBottomColor:'#fff',
                    opacity:0.5,
                    width:'100%',
                    marginVertical:5
                }}
            >

            </View>
        )
    }

    
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
                ItemSeparatorComponent = {() =>  <Separator /> }
            />
        </View>   
    )
}
export default HomeScreen