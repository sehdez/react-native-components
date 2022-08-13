import React from 'react'
import { View, FlatList, Text, Image, ActivityIndicator } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for( let i = 0; i < 6; i++ ){
            newArray[i] = numbers.length + i;

        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
            
        }, 500)
    }

    const renderItem = ( item: number ) => {
        return (
            <FadeInImage 
                uri= {`https://picsum.photos/id/${ item }/500/400?grayscale`} 
                style = {{
                    width:'100%',
                    height: 400
                }}    
            />
            // <Image style={{ 
            //     height:400
            // }}
            //     source={{
            //         uri:`https://picsum.photos/id/${ item }/500/400?grayscale`
            //     }}
            // />
        )
    }

    const renderLoading = () => {
        return(
            <View style={{ 
                height:80,
                justifyContent: 'center',
                alignItems:'center'
            }}>
                <ActivityIndicator size={50} color='white' />
            </View>
        )
    }


    return (
        <View>
            

            <FlatList 
                ListHeaderComponent={()=> <HeaderTitle title='Infinite Scroll' /> }
                data={ numbers }
                keyExtractor = { (item) => item.toString() }
                renderItem = { ({ item } ) => renderItem(item) }
                ListFooterComponent={ renderLoading }
                onEndReached = { loadMore }
                onEndReachedThreshold = {1}
            />
        </View>
    )
}

export default InfiniteScrollScreen