import React from 'react'
import { SectionList, View, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: 'DC Comics',
      data: ['Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin','Batman', 'Superman', 'Robin' ]
    },
    {
      casa: 'Marvel Comics',
      data: ['Thor', 'Spiderman','Antman','Antman', 'Thor', 'Spiderman','Antman' ]
    },
    {
      casa: 'Anime',
      data: ['Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama','Kenshin', 'Goku', 'Saitama' ]
    }
];

const SectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex:1 }}>
            
            <SectionList 
                sections   = { casas }
                keyExtractor = { (item, index) => item + index }
                stickySectionHeadersEnabled
                showsVerticalScrollIndicator={false}

                ListHeaderComponent = { () => <HeaderTitle title='Section List' noMB textAlign='center' /> }
                renderSectionFooter={ ({ section }) => <Text style={{ ...styles.text, textAlign:'right' }}>{ 'Total: ' + section.data.length }</Text> }
                ListFooterComponent = { () => <HeaderTitle title={ 'Total de casas: ' + casas.length } /> }
                ItemSeparatorComponent = { () => <ItemSeparator noBorder /> }

                renderItem = { ({ item }) => <Text style={ styles.text }>{ item }</Text> } 
                renderSectionHeader = { ({ section }) =>( 
                    <View style={{ backgroundColor:'black' }}>
                        <HeaderTitle noMB title={ section.casa } /> 
                    </View>
                )}
            />


        </View>
    )
}

export default SectionListScreen