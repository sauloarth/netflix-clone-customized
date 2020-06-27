import React, { useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import Avatar from '../components/Avatar'

const Container = styled.View`
    flex: 1;
    background-color: #000;
    flex-direction: column;
    padding: 10px;
    justify-content: flex-start;
`;

const LabelAvatars = styled.Text`
  color: white;
  padding: 10px;
`;

const Button = styled.Button`
  margin: 10px;
  background-color: white;
`;

const RowContainer = styled.ScrollView`
    height: 80px
`;

const icons = [
    require('../assets/avatars/avatar3.png'),
    require('../assets/avatars/avatar6.png'),
    require('../assets/avatars/avatar5.png'),
    require('../assets/avatars/avatar4.png'),
    require('../assets/avatars/avatar2.png'),
    require('../assets/avatars/avatar1.png'),
];

export const ChooseIcon = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Escolha o avatar',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 16,
            },
            headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: '#ffffff',
            },
            headerTintColor: 'white',
        })
    }, [])

    return (
        <Container>
            <LabelAvatars>Classics</LabelAvatars>
            <View style={{ height: 80 }}>
                <RowContainer horizontal>
                    {
                        icons.map((item, index) => (
                            < TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('More', {
                                        icon: item,
                                        name: props?.route?.params?.name,
                                        uri: null,
                                    })
                                }}
                            >
                                <Avatar
                                    key={index}
                                    icon={item}
                                />
                            </TouchableOpacity>

                        ))
                    }
                </RowContainer>
            </View>
            <Button
                color='#1a1718'
                title='Tirar Foto'
                onPress={() => {
                    props.navigation.navigate('Camera', {
                        name: props?.route?.params?.name,
                    })
                }}
            />
        </Container >
    )
}

