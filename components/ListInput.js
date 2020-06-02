import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const ListInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const setGoal = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAdd(enteredGoal)
    // we dont need bind here, as it will run when the addGoalHanlder is executed
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Set Goals"
          style={styles.input}
          onChangeText={setGoal}
          value={enteredGoal}
        />
        {/* <Button title="+" onPress={props.onAdd.bind(this, enteredGoal)} /> */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          {/* dont need to bind anything here because you arent returning anything from the function */}
        </View>
      </View>
    </Modal>
  )
}

// bind pre-configures arguments which will be passed along on button press

// button could have been {() => goalHandler(enteredGoal)} - this would be registered as a TO BE registered function on press (wouldnt run until button press)
// the props.onAdd calls on the onAdd forwarding the goal to app.js, which passes the goalHandler function --> setting the goals to current goals and creating the object

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
    // flex is one so that it takes all the available space i.e. the space of the modal (its parent) - without it will just take as much space as its child needs
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: '80%',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%'
    // width has to be set because it will only be taking the width of the children in the container otherwise (the buttons)
  },
  button: {
    width: '40%'
    // this will be 40% of the width of the container, which is 60%
  }
})

export default ListInput
