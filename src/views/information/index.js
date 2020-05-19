import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import HeaderComponent from '../../component/header';
import styles from './styles';
import {Card, Text, Input, Button, Avatar, CheckBox} from 'react-native-elements';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const ShippingInformation = ({navigation}) => {

    return(
        <View style={{flex: 1}}>
            <HeaderComponent
                title={"Datos de envío"}
                navigation={navigation}
                route={'Delivery'}
            />
            <ScrollView
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}
            >
                <KeyboardAwareScrollView>
               <View style={styles.Container}>
                  <View style={{height: 90}}>
                      <Card containerStyle={{borderWidth: 4}}>
                          <View style={styles.ContainerCardColumn}>
                              <Text style={styles.TextCardBold}>Calle 127 # 73-41</Text>
                              <View style={{flexDirection: 'row'}}>
                                  <Text style={styles.TextCardSimple}>Editar información</Text>
                                  <Avatar source={require('../../assets/arrow.png')}
                                          rounded
                                          containerStyle={styles.AvatarArrow}
                                  />
                              </View>
                          </View>
                      </Card>
                  </View>
                   <View style={{height: 80}}>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                               <Image
                                   source={require('../../assets/noun_Phone_3063219.png')}
                                   style={{width: '10%', height:'100%'}}
                                   resizeMode={'contain'}
                               />
                               <Text style={styles.TextCardSimple}>Agregar nuevo número</Text>
                               <Avatar source={require('../../assets/arrow.png')}
                                       rounded
                                       containerStyle={styles.AvatarArrow}/>
                           </View>
                       </Card>
                   </View>
                   <View style={{height: 100}}>
                       <Text style={styles.TextSimple}>Todos los productos</Text>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={styles.ContainerCardRow}>
                               <Text style={styles.TextCardSimple}>Productos (3)</Text>
                               <Avatar source={require('../../assets/arrow.png')}
                                       rounded
                                       containerStyle={styles.AvatarArrow}/>
                           </View>
                       </Card>
                   </View>
                   <View style={{height: '5%'}}>
                       <Image
                           source={require('../../assets/Grupo_5848.png')}
                           style={{width: '90%', height:100, marginLeft: '5%'}}
                           resizeMode={'cover'}
                       />
                   </View>
                   <View style={{marginTop: 45}}>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={styles.ContainerCardRow}>
                               <Text style={styles.TextCardSimple}>1 Semana</Text>
                           </View>
                       </Card>
                   </View>
                   <View style={{marginTop: 10}}>
                       <Text style={styles.TextSimple}>Redimir cupón</Text>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={styles.ContainerCardRow}>
                               <View style={{flexDirection: 'column', height: '50%', width: '60%'}}>
                                   <Input placeholder='LAIKA200F'
                                   />
                                   <Text style={{...styles.TextCardSimple, marginLeft: 10}}>Ingresar cupón</Text>
                               </View>
                               <View style={styles.ContainerButtonCard}>
                                   <Button
                                       buttonStyle={{backgroundColor: '#603E85'}}
                                       title={'Validar'}
                                   />
                               </View>
                           </View>
                       </Card>
                   </View>
                   <View>
                       <Text style={styles.TextSimple}>Método de pago</Text>
                       <Text style={styles.TextShort}>Pago en linea</Text>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                               <Image
                                   style={{width: '10%', height:'100%'}}
                                   resizeMode={'contain'}
                               />
                               <Text style={styles.TextCardSimple}>Agregar tarjeta</Text>
                               <Avatar source={require('../../assets/arrow.png')}
                                       rounded
                                       containerStyle={styles.AvatarArrow}/>
                           </View>
                       </Card>
                   </View>
                   <View style={{height: 140}}>
                       <Text style={styles.TextSimple}>Pago en casa</Text>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={styles.ContainerCardRow}>
                               <Text style={styles.TextCardSimple}>Efectivo</Text>
                           </View>
                       </Card>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={styles.ContainerCardRow}>
                               <Text style={styles.TextCardSimple}>Datafono</Text>
                           </View>
                       </Card>
                   </View>
                   <View style={{height: 130, marginTop: 25}}>
                       <Text style={styles.TextSimple}>¿Cuándo quieres recibir su pedido?</Text>
                       <Card containerStyle={{borderWidth: 4}}>
                           <View style={styles.ContainerCardRow}>
                               <View >
                                   <Text style={styles.TextCardSimple}>Sábado. Nov 12</Text>
                                   <Text style={{color: '#603E85', fontSize: 18, fontWeight: 'bold'}}>10:00 AM    2:30PM</Text>
                                   <Text style={styles.TextCardSimple}>Valor domicilio $3.500</Text>
                               </View>
                               <View>
                                   <Avatar source={require('../../assets/arrow.png')}
                                           rounded
                                           containerStyle={{ width: '90%', height:'40%', marginTop: 15, marginRight: 20}}/>
                               </View>
                           </View>
                       </Card>
                   </View>
                   <View style={{...styles.ContainerCardRow, height: 70}}>
                       <View style={{flexDirection: 'row'}}>
                           <Image
                               source={require('../../assets/Grupo_5851.png')}
                               style={{width: '8%', height:'100%', marginLeft: 15}}
                               resizeMode={'contain'}
                           />
                           <View style={{flexDirection: 'column'}}>
                               <Text style={styles.TextBold}>Usar LaikaCoins</Text>
                               <Text style={styles.TextShort}>Total de LaikaCoins disponible
                                   $15.000 </Text>
                           </View>
                       </View>
                       <View>
                           <Text style={styles.TextNumberBold}>$10.800</Text>
                       </View>
                   </View>
                   <View style={{...styles.ContainerCardRow }}>
                       <Text style={styles.TextShort}>Subtotal</Text>
                       <Text style={{marginRight: 15, color: '#603E85', fontSize: 20, fontWeight: 'bold'}}>$125.675</Text>
                   </View>
                   <View style={{...styles.ContainerCardRow }}>
                       <Text style={styles.TextShort}>Cupón de descuento</Text>
                       <Text style={{marginRight: 15, color: 'pink', fontSize: 18, fontWeight: 'bold'}}>$0</Text>
                   </View>
                   <View style={{...styles.ContainerCardRow }}>
                       <Text style={styles.TextShort}>Membresía Laika</Text>
                       <Text style={{marginRight: 15, color: 'pink', fontSize: 18, fontWeight: 'bold'}}>$-3.500</Text>
                   </View>
                   <View style={{...styles.ContainerCardRow }}>
                       <Text style={styles.TextShort}>Costo de domicilio</Text>
                       <Text style={{marginRight: 15, marginTop: 7, color: 'pink', fontSize: 18, fontWeight: 'bold'}}>$-3.500</Text>
                   </View>
                   <View style={{...styles.ContainerCardRow }}>
                       <Text style={{marginLeft: 15, marginTop: 7, color: '#603E85', fontSize: 24, fontWeight: 'bold'}}>Total</Text>
                       <Text style={{marginRight: 15, marginTop: 7, color: '#603E85', fontSize: 24, fontWeight: 'bold'}}>$119.175</Text>
                   </View>
               </View>
                </KeyboardAwareScrollView>
            </ScrollView>
            <Button
                buttonStyle={{backgroundColor: '#603E85',
                    width: '90%',
                    marginLeft: '5%',
                    marginBottom: 10
                }}
                title={'Hacer Pedido'}
            />
        </View>

    );
};


export default ShippingInformation;
