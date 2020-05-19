import React, { Component} from 'react';
import {
    ScrollView,
    View,
    Image
} from 'react-native';
import HeaderComponent from '../../component/header';
import { Text, Card, ListItem} from 'react-native-elements';
import styles from './styles';
import ButtonDays from '../../component/button/buttonDays';

const schedules = [
    {
        schedule: '10:00 AM - 2:30 PM',
        price: '$3.500'
    },
    {
        schedule: '2:30 PM - 6:30 PM',
        price: '$3.500'
    },
    {
        schedule: '7:00 PM - 10:00 PM',
        price: 'Gratis'
    },
]

const days = [
    {
        today: 'Hoy',
        day: 'Lunes',
        number: '7'
    },
    {
        today: '',
        day: 'Martes',
        number: '8'
    },
    {
        today: '',
        day: 'Miercoles',
        number: '9'
    },
    {
        today: '',
        day: 'Jueves',
        number: '10'
    },
    {
        today: '',
        day: 'Viernes',
        number: '11'
    },
    {
        today: '',
        day: 'Sábado',
        number: '12'
    },
]

const DeliveryTime = ({navigation}) => {



    return(
        <View style={{flex: 1}}>
            <HeaderComponent
                title={"Hora de entrega"}
                navigation={navigation}
                route={'Information'}
            />
            <ScrollView
                style={{flex: 1, marginBottom: 20}}
                contentContainerStyle={{flexGrow: 1}}
                showsVerticalScrollIndicator={false}
            >
            <View style={styles.ContainerImage}>
                   <Image source={require('../../assets/Grupo_5846.png')}
                       style={styles.Image}

                />
                <Text style={styles.Text}>Sábado. Nov 12 </Text>
                <View style={{flexDirection: 'row'}}>
                    {days.map((day) => {
                        return (
                            <ButtonDays
                                day={day.day}
                                today={day.today}
                                number={day.number}
                            />
                        )
                    })}
                </View>
            </View>
                <View>
                    <Text style={styles.Text}>Selecciona Horario</Text>
                    {
                        schedules.map((schedule,i) => {
                            return(
                                <Card containerStyle={{borderWidth: 4}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{color: '#603E85', fontWeight: 'bold', fontSize: 18}}>{schedule.schedule}</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{color: '#603E85', fontSize: 14}}>Valor Domicilio </Text>
                                            <Text style={{color: 'green', fontSize: 14}}>{schedule.price}</Text>
                                        </View>

                                    </View>
                                </Card>
                            )
                        })
                    }
                </View>
            </ScrollView>
            </View>

    );
};


export default DeliveryTime;


