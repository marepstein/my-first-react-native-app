import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: 'red',
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#ededed'
  }
})

export default ListItem

/* passing props.id (line6) and binding sets a default argument so that when this onDelete gets called a default argument of ID is passed on press*/
