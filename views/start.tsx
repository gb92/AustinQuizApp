import React from 'react'
import {Component} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';

type Props = {}

class StartPage extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }

    startQuiz() {
        alert("Button Pressed")
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Austin Trivia Quiz</Text>
                <Button title="Start Quiz" onPress={this.startQuiz}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

export default StartPage