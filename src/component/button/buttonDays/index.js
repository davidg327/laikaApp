import React from 'react';
import {Button} from 'react-native-elements';

const ButtonDays = (props) => {
    return (
        <Button
            buttonStyle={props.day !== 'Lunes' ? {backgroundColor: 'white'} : {backgroundColor: '#b8a5ff'} }
            containerStyle={props.day === 'Miercoles' || props.day === 'Viernes' || props.day === 'Sábado'
                ? {width: 62, height:70, marginLeft: 5}
                : {width: 50, height:70, marginLeft: 5}}
            titleStyle={{fontSize: 12, alignItems: 'center', color: '#603E85'}}
            title={`${props.today} ${props.day} ${props.number}`}
        />
    );
};

export default ButtonDays;
