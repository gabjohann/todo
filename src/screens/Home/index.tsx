import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { styles } from './styles'
import { ClipboardText, PlusCircle } from 'phosphor-react-native'
import React, { useState } from 'react'
import { Task } from '../../components/Task'

export function Home() {
  const [taskList, setTaskList] = useState<string[]>([])
  const [completedTaskList, setCompletedTaskList] = useState<string[]>([])
  const [task, setTask] = useState('')
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleAddTask() {
    setTaskList((prevState) => [...prevState, task])
    setTask('')
  }

  function handleDeleteTask(taskDescription: string, isCompleted: boolean) {
    setTaskList((prevState) =>
      prevState.filter((task) => task !== taskDescription),
    )

    if (isCompleted) {
      setCompletedTaskList((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task !== taskDescription),
      )
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1)
    }
  }

  function handleToggleComplete(isChecked: boolean, taskDescription: string) {
    if (isChecked) {
      setCompletedTaskList((prevCompletedTasks) => [
        ...prevCompletedTasks,
        taskDescription,
      ])
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1)
    } else {
      setCompletedTaskList((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task !== taskDescription),
      )
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1)
    }
  }
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} alt="" />
      </View>

      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <PlusCircle size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.counterContainer}>
          <View style={styles.counterGroup}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.counter}>{taskList.length}</Text>
          </View>

          <View style={styles.counterGroup}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.counter}>{completedTasks}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <FlatList
          data={taskList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              taskDescription={item}
              onRemove={() => handleDeleteTask(item, false)}
              onToggleComplete={(isChecked) =>
                handleToggleComplete(isChecked, item)
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <ClipboardText size={56} color="#333333" />
              <Text style={styles.strongText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.regularText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
