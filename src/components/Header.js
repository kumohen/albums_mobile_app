import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:"center",
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5
    },
    textStyle:{
        fontSize:20
    }
})

export default Header;