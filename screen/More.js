import React from 'react'
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Avatar from '../components/Avatar'
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

const Avatars = styled.View`
  height:150px
`;

const AvatarItems = styled.View`
  flex: 1;
  background-color: #000;
  padding: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center
`;

const NetflixButton = styled.TouchableOpacity`
  flex-direction:row;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  margin:10px;
  color: gray;
`;

const profiles = [
    {
        icon: require('../assets/avatars/avatar1.png'),
        name: 'Pedro',
        uri: null,
    },
    {
        icon: require('../assets/avatars/avatar2.png'),
        name: 'Tiago',
        uri: null,
    },
    {
        icon: require('../assets/avatars/avatar3.png'),
        name: 'Lucas',
        uri: null,
    },
    {
        icon: require('../assets/avatars/avatar4.png'),
        name: 'João',
        uri: null,
    },
    {
        icon: require('../assets/avatars/avatar5.png'),
        name: 'Paulo',
        uri: null,
    }
];

const setAvatarImages = (props, profiles) => {
    if (props.route?.params?.name) {
        profiles.map(item => {
            if (item.name === props.route.params.name) {
                if (props.route?.params?.uri) {
                    item.uri = props.route.params.image;
                    item.icon = null;
                }
                if (props.route?.params?.icon) {
                    item.icon = props.route.params.icon;
                    item.uri = null
                }
            }
            return item;
        })
    }
}

const selectProfile = (navigation, item) => {
    navigation.navigate('Home', { name: item.name })
}

const editProfile = (navigation, profiles) => {
    navigation.navigate('EditProfiles', { profiles: profiles })
}


export const More = (props) => {
    setAvatarImages(props, profiles)

    return (

        <Container>
            <Avatars>
                <AvatarItems>
                    {
                        profiles.map(item => {
                            return (
                                < TouchableOpacity onPress={item => selectProfile(props.navigation, item)}>
                                    <Avatar
                                        key={item.name}
                                        icon={item.icon}
                                        uri={item.uri}
                                        name={item.name}

                                    />
                                </TouchableOpacity>

                            )
                        })
                    }
                </AvatarItems>
            </Avatars>
            <NetflixButton
                onPress={() => editProfile(props.navigation, profiles)}
            >
                <MaterialIcons name="edit" size={24} color="gray" />
                <ButtonLabel>Gerenciar Perfis</ButtonLabel>
            </NetflixButton>
        </Container >

    );
}







