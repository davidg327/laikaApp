import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container: {
        flex: 1, flexDirection: 'column'
    },
    ContainerCardColumn: {
        flexDirection: 'column', alignItems: 'center'
    },
    TextCardBold: {
        color: '#603E85', fontSize: 16, fontWeight: 'bold'
    },
    TextCardSimple: {
        color: '#603E85', fontSize: 12
    },
    AvatarArrow: {
        width: '5%', height:'80%', marginTop: 5, marginLeft: 5
    },
    TextSimple: {
        marginLeft: 15, color: '#603E85', fontSize: 18
    },
    ContainerCardRow: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    ContainerButtonCard: {
        width: 100, height: 20,  alignContent: 'flex-end', marginTop: 20
    },
    TextShort: {
        marginLeft: 15, marginTop: 7, color: '#603E85', fontSize: 14
    },
    TextBold: {
        marginLeft: 5, marginTop: 7, color: '#603E85', fontSize: 14, fontWeight: 'bold'
    },
    TextNumberBold: {
        marginRight: 15, marginTop: 20, color: '#603E85', fontSize: 20, fontWeight: 'bold'
    }
});

export default styles;
