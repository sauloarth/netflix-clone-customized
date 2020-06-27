import React, { useEffect } from 'react'
import styled from 'styled-components/native';
import Avatar from '../components/Avatar'
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

const BackButton = styled.Button`
background-color: #000;
font-size: 16px;
font-weight: bold;
`;

const RowContainer = styled.View`
flex-direction: row;
justify-content: center;
`;

const twoBytwo = (profiles) => {
    const result = []
    profiles.map((item, index) => {
        if (index % 2 === 0) result.push([]);
        result[Math.floor(index / 2)].push(item);
    })
    return result;
}

export const EditProfiles = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Gerenciar perfis',
            headerTitleAlign: 'center',
            henderTitleStyle: {
                fontSize: 16,
            },
            headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: '#ffffff'
            },
            headerTintColor: 'white',
            headerLeft: () => (
                <BackButton
                    onPress={() => props.navigation.goBack()}
                    title='Concluído'
                    color='black'
                />
            )
        })
    }, [])

    const items = twoBytwo(props?.route?.params?.profiles)

    return (
        <Container>
            {items.map((row, rowIndex) => (
                <Row key={rowIndex} items={row} {...props} />
            ))}
        </Container>
    )

}

const Row = (props) => {
    return (
        <RowContainer>
            {
                props.items.map(column => (
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('ChooseIcon', { name: column.name })
                        }}>
                        <Avatar
                            key={column.name}
                            big={true}

                            edit
                            icon={column.icon}
                            uri={column.uri}
                            name={column.name}
                        />
                    </TouchableOpacity>

                ))
            }
        </RowContainer>
    )
}