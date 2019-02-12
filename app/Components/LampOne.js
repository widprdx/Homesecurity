import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

export class LampOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lamp: false
        }
    }

    handleClick = () => {
        this.setState({
            lamp: !this.state.lamp
        })
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.handleClick}>
                <Image
                    style={styles.lamp_style}
                    source={this.state.lamp ? require('./img/lamp_on.png') : require('./img/lamp_off.png')}
                />
                <Text style={styles.text_lamp}>Lampu 1</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
    lamp_style: {
        width: 100,
        height: 150,
    },
    text_lamp: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
    }
})

export default LampOne