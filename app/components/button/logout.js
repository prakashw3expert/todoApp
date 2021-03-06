import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import {Colors, Metrics, Fonts} from '../../themes/'

export default class LogoutButton extends Component {
    render(){
        const {title, bottom, onPress} =  this.props
        return(
            <Button style={[styles.button, { bottom: bottom}]} onPress={onPress}>
             <Text style={styles.text}>{title}</Text>
            </Button>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width: '93%',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        height: Metrics.screenHeight * 0.075,
        marginVertical: Metrics.screenHeight * 0.029,
        borderWidth: 1,
        borderColor: Colors.borderRed,
        backgroundColor:  "white",
        position: 'absolute',
        elevation: 0
    },
    text: {
        color: "rgb(255,59,48)",
        fontSize: 14,
        fontFamily: Fonts.type.SFProTextMedium
      }
  })