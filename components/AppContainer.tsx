import React from 'react';
import FormConnected from '../containers/Form'
import ListConnected from '../containers/List'
import { StyleSheet, View, TouchableOpacity, Text,  } from 'react-native';

interface Props {
  formVisible: boolean;
  showForm: (bool: boolean) => void;
  setFormType: (typeStr: string) => void;
}

const AppContainer = ({ formVisible, showForm, setFormType }:Props) => {
  return (
      <View style={styles.container}>
      { (formVisible) ?
        (<FormConnected/>)
      :
        (<View style={styles.listContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {setFormType('create'); showForm(true);}}
          >
            <Text style={styles.buttonText}>Add Cat</Text>
          </TouchableOpacity>
          <ListConnected />
        </View>)
      }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: '#e6ffff',
    paddingTop: "12%",
    width: "100%"
  },
  listContainer: {
    width: "100%",
    height: "90%",
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    alignItems: "center",
    height: 40,
    width: 290,
    padding: 5,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000000'
  },
  buttonText: {
    fontSize: 24
  }
});

export default AppContainer;