import React from 'react'
import { Modal, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { useState } from 'react';

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)


    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal' />

            <TouchableOpacity 
                activeOpacity={0.7}
                style={ styles.button }
                onPress = {() =>  setIsVisible(true)}
            >
                <Text style={ styles.buttonText }> Abrir modal </Text>
            </TouchableOpacity>

            <Modal
                transparent
                animationType='fade'
                visible = { isVisible }
            >
                <View style={{ 
                    backgroundColor: 'rgba(200,200,200,0.1)',
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    
                }}>
                    <View style={{ 
                        width : 300,
                        height: 200,
                        backgroundColor:'#000',
                        borderRadius: 5,
                        alignItems:'center',
                        padding:10,
                        shadowColor:'rgba(255,255,255,0.4)',
                        shadowOffset :{
                            width:0,
                            height:10
                        },
                        shadowOpacity:0.25,
                        elevation: 10
                    }}>
                        <Text style={ styles.text }>Titulo del modal</Text>
                        <TouchableOpacity 
                            activeOpacity={0.7}
                            style={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                borderColor:'rgba(255,255,255,0.3)',
                                borderWidth:0.3,
                                borderRadius:4,
                                height:30,
                                justifyContent:'center',
                                paddingHorizontal:5
                            }}
                            onPress = {()=> setIsVisible(false)}
                        >
                            <Text style={{ ...styles.buttonText, fontSize: 17 }}> cerrar modal </Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>


            </Modal>
        </View>
    )
}

export default ModalScreen