import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { MenuItem } from '../interfaces/appInterfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';



const menuItems:MenuItem[] = [
    { name: 'Animation 101', icon: 'cube-outline', component:'Animation101Screen'},
    { name: 'Animation 102', icon: 'cube-outline', component:''},
]

const HomeScreen = () => {
    
    const renderListHeader = () => {
        return(
            <View style={{ marginBottom:20 }}>
                <Text style={styles.title}>Opciones de Menú </Text>
            </View>
        )
    }

    const separator = () => {
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

    const { top } = useSafeAreaInsets();
    return (
        <View style={{
            marginTop: top+20,
            flex:1,
            ...styles.globalMargin,
        }}>
            
            <FlatList
                data = { menuItems }
                renderItem = { ({ item }) => <FlatListMenuItem menuItem ={ item } /> }
                keyExtractor = { (item) => item.name }
                StickyHeaderComponent={ renderListHeader }
                ListHeaderComponent={ renderListHeader }
                ItemSeparatorComponent = { separator }
            />
        </View>   
    )
}
export default HomeScreen