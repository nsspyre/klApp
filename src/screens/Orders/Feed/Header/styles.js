import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    addressDirection: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 5,
    },
    address: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressTitle: {
        fontSize: 20,
        paddingHorizontal: 5
    }
});

export default styles;
