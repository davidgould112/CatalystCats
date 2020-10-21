import React from 'react';
import ListItemConnected from '../containers/ListItem'
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { Cat } from '../state/types';

interface Props {
  catList: Cat[];
};

const CatList = ({ catList }: Props) => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={catList}
        renderItem={({ item }: any) => (
          <ListItemConnected name={item.name} breed={item.breed} color={item.color} id={item.key}/>
        )}
        keyExtractor={(item, index) => item.key}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%" || 0,
    width: "100%",
    height: "100%"
  }
})

export default CatList;