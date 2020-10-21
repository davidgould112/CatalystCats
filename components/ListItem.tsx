import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Cat } from '../state/types';

interface Props {
  name: string;
  breed: string;
  color: string;
  id: string;
  removeCat: (key: string) => void;
  editCat: (cat: Cat) => void;
  showForm: (bool: boolean) => void;
  setFormType: (typeStr: string) => void;
}

const ListItem = ({ name, breed, color, id, removeCat, editCat, showForm, setFormType }: Props) => {
  const cat: Cat = { name: name,
    breed: breed,
    color: color,
    key: id
  } 

  const editButtonPess = (): void => {
    editCat(cat);
    setFormType("edit");
    showForm(true);
  }
                  
  return (
  <View style={styles.item}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Breed: {breed}</Text>
      <Text style={styles.title}>Color: {color}</Text>
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {editButtonPess()}}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {removeCat(id)}}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#cceeff',
    marginVertical: 8,
    marginHorizontal: 16,
    width: "90%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 2
  },
  title: {
    fontSize: 15,
    color: "#660033",
  },
  textContainer: {
    width: "40%",
    height: "80%",
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "35%",
    height: 80,
    marginRight: 15
  },
  button: {
    alignItems: "center",
    height: 30,
    padding: 5,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000000'
  }
});

export default ListItem