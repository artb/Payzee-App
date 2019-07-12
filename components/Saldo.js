import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { human } from 'react-native-typography'

export default Saldo = (props) => {
    return(
        <View style={styles.container}>
            <Text style={human.body}>Saldo Disponivel:</Text>
            <Text style={human.headline}>R$: {props.valorDisponivel}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#b81e38'
    }

})
