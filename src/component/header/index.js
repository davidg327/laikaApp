import React from 'react';
import {Header, Image} from 'react-native-elements';
import {View} from 'react-native';
import styles from './styles';
import {BorderlessButton} from "react-native-gesture-handler";

const HeaderComponent = (props) => {
    return (
        <View style={styles.Container}>
        <Header
            leftComponent={
                <BorderlessButton onPress={() => props.navigation.navigate(props.route)}>
                <Image  source={require('../../assets/chevron-right.png')}
                        style={styles.HeaderImage}
                />
                </BorderlessButton>
            }
            containerStyle={styles.HeaderContainerStyle}
            backgroundColor={'#fff'}
            centerComponent={{
                text: props.title, style: {...styles.HeaderCenterComponent}
            }}
        />
        </View>
    );
};

export default HeaderComponent;
