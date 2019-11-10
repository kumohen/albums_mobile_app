import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    constainerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        shadowRadius:2,
        elevation:1,
        marginRight:5,
        marginLeft:5,
        marginTop:10
    }
})

export default Card;