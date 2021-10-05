import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const alphabet = [
  'A',
  'B',
  'C',
  'Ç',
  'D',
  'E',
  'F',
  'G',
  'Ğ',
  'H',
  'I',
  'İ',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'Ö',
  'P',
  'R',
  'S',
  'Ş',
  'T',
  'U',
  'Ü',
  'V',
  'Y',
  'Z',
];

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.headerText}>Türk Alfabesi</Text>
      <View style={styles.alphabetContainer}>
        {alphabet.map((letter, index) => (
          <View style={styles.letterContainer} key={index}>
            <Text style={styles.index}>{index + 1}.</Text>
            <Text style={styles.letter}>{letter}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {display: 'flex', justifyContent: 'space-evenly', flex: 1},
  alphabetContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  letterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 75,
    margin: 10,
    padding: 10,
    backgroundColor: 'rgb(253,265,177)',
    borderRadius: 15,
  },
  letter: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 5,
  },
  index: {
    fontSize: 18,
    fontWeight: '400',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default App;
