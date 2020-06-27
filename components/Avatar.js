import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

`;

const ImageAvatar = styled.Image`
  width: 60px;
  height: 60px;
`;

const LabelAvatar = styled.Text`
  font-size: 12px;
  color: white;
  padding: 10px;
`;

const Menu = styled.TouchableOpacity``;

const Avatar = (props) => {
  return (
    <Container onPress={() => console.log("Avatar apertado")}>
      <ImageAvatar resizeMode="contain" source={props.icon || { isStatic: true, uri: props.uri }} />
      <LabelAvatar>{props.name}</LabelAvatar>
    </Container>
  );
};

export default Avatar;
