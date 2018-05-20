import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Form, Input, Item } from 'native-base';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Form>
          <Input>
            <Item>

            </Item>
          </Input>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
