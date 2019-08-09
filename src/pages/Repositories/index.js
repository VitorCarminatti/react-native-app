import React, { Component } from 'react';

import { Container, Title, AvatarWrapper, Avatar, UsernameText, List } from './styles';
import { ActivityIndicator, Text, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { loading, data, error, username, avatar_url } = this.props;
    return (
      <Container>
        {error && <Text>Algo deu errado, tente novamente!</Text>}

        <AvatarWrapper>
          <Avatar source={{ uri: avatar_url }} />
          <UsernameText>{username}</UsernameText>
        </AvatarWrapper>

        {data && <Title>Repositórios</Title>}
        <List>
          {loading ? (
            <ActivityIndicator size="small" color="#999" />
          ) : (
            data.map(repo => <Text key={repo.id}>{repo.name}</Text>)
          )}
        </List>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

const mapStateToProps = state => ({
  data: state.repositories.data,
  loading: state.repositories.loading,
  error: state.repositories.error,
  avatar_url: state.login.avatar_url,
  username: state.login.username,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
