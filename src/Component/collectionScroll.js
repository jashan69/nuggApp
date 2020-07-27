import React from 'react';
import {View, StyleSheet, FlatList, Image, Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation'
import { SvgCssUri } from 'react-native-svg';




const CollectionScroll = ({arrayName, headerText, navigation, routeName}) => {
    return <View>
        <Text  style={Style.headerStyle} >{headerText}</Text>
        <FlatList
                style={{marginTop:12}}
                showsHorizontalScrollIndicator={false}
                horizontal = {true}
                data = {arrayName}
                keyExtractor = {(arrayName) => arrayName.name}
                renderItem = {({item}) => {
                    return<TouchableOpacity onPress={() => navigation.navigate(routeName, {name:item.name})}>{routeName === 'Effect'?<Image
                        style={Style.imageStyle2}
                        source = {{uri:item.link}}
                    />:<SvgCssUri style={Style.imageStyle} uri={item.link}/>}
                        </TouchableOpacity>
                }}
                
            />
    </View>
};

const Style = StyleSheet.create({
    headerStyle:{
        fontFamily:'Poppins-SemiBold',
        fontSize:hp('3.5%'),
        marginLeft:5,
        color:'white',
        borderEndWidth:0,
        borderBottomWidth:1,
        borderBottomColor:'white',
        padding:5,
        marginTop:10
    },
    imageStyle:{
        height:160,
        width:160,
        margin:5
    },
    imageStyle2:{
        height:195,
        width:172,
        margin:5,
        borderRadius:10
    }
})

export default withNavigation(CollectionScroll);