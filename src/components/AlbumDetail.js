import React from 'react';
import {Text,View,StyleSheet,Image,Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url} = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.imageStyle} source={{uri:thumbnail_image}} />
                </View>
                <View style={styles.headerContentStyle}>   
                  <Text style={styles.headerTextStyle}>{title}</Text>
                  <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
               <Image style={styles.image2Style} source={{uri:image}} />
             </CardSection>
             <CardSection>
               <Button onPress={() => Linking.openURL(url)} >Buy Now</Button>
             </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle:{
      flexDirection:"column",
      justifyContent:"space-between",

    },
    headerTextStyle:{
        fontSize:18

    },
    imageStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    image2Style:{
        height:300,
        flex:1,
        width:null

    }
})

export default AlbumDetail;