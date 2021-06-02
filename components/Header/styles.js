import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',

    },
    menu: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    }
})

export default styles;