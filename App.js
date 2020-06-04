import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import ListItem from './components/ListItem'
import ListInput from './components/ListInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [showModal, setShowModal] = useState(false)
  console.log(goals)

  const goalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
    setShowModal(false)
  }

  // here shorter syntax is used (no {}) as there is only one expression to return & both state changes occur at once

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  // this second function uses {} because you want to return a slightly longer body
  // you're checking that the goal.id does NOT equal the goalId being deleted as youre setting the currentGoals, thus filtering through to remove the relevant goal and returning the rest

  const cancelGoalModal = () => {
    setShowModal(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setShowModal(true)} />
      <ListInput
        onAdd={goalHandler}
        onCancel={cancelGoalModal}
        visible={showModal}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={(goal) => (
          <ListItem
            onDelete={removeGoalHandler}
            title={goal.item.value}
            id={goal.item.id}
          />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
