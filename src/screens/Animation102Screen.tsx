import React, { useRef } from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

const DraggableView = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    
  
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y },
      ],
      { useNativeDriver:false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          { 
            toValue: {x:0 , y: 0},
            useNativeDriver: false
        }  
        ).start();
      },
    });
  
    return (
      <View style={styles.container}>
          <Animated.View
        {...panResponder.panHandlers}
        style={  [pan.getLayout(), styles.purpleBox ] }
      />
    </View>
  );
};


const Animation102Screen = () => {



    return (
        <DraggableView />
        // <View style={ styles.container }>
        //     <Animated.View style={ styles.purpleBox }></Animated.View>



        // </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    purpleBox:{
        backgroundColor:'#5856d6',
        width:150,
        height:150,
   },
   button: {
        width: 70,
        height:30,
        margin:5,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'

   }
});

export default Animation102Screen


