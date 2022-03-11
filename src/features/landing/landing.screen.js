import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class Landing extends React.Component {
  goToLogin = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Image
          source={require('../../assets/cajoo_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.titre}>Vos courses en 3 clics !</Text>
        <View style={styles.bot}>
          <TouchableOpacity style={styles.boutton1} onPress={this.goToLogin}>
            <Text style={styles.textButton1}>Me connecter👋</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton2}>Découvrir l'app</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    height,
    width,
  },
  logo: {
    marginTop: height * 0.3,
    marginBottom: 50,
  },
  boutton1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.95,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  bot: {
    position: 'absolute',
    bottom: 30,
  },
  textButton1: {
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.95,
    height: 50,
  },
  textButton2: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default Landing;
