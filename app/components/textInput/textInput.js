import React, {Component} from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../themes'

export default class CustomTextInput extends Component {
    render(){
        const {multiline, paddingTop, placeholder, height, onChangeText, borderColor} =  this.props
        return(
            <TextInput style={[styles.textInput, {
                height: height ? height : Metrics.screenHeight * 0.075, 
                paddingTop: paddingTop ? paddingTop : 0,
                borderColor: borderColor ? borderColor : Colors.borders
                }]}
                placeholder={placeholder}
                multiline={multiline}
                placeholderTextColor={Colors.placeholder}
                onChangeText={onChangeText}
            />
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "white",
        width: '93%',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: Metrics.screenWidth * 0.002,
        borderColor: Colors.borders,
        paddingHorizontal: Metrics.screenWidth * 0.026,
        fontSize: Metrics.screenWidth * 0.04,
        fontFamily: Fonts.type.SFProTextRegular,
    }
  })