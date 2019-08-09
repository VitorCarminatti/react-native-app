import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #028090;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  margin-bottom: 10;
  color: #000;
`;

export const AvatarWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const UsernameText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const List = styled.ScrollView`
  margin-bottom: 10px;
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border-color: #fff;
  border-width: 3px;
`;
