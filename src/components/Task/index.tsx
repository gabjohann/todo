import { useState } from 'react'
import { Trash } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import Checkbox from 'expo-checkbox'

import { styles } from './styles'

interface TaskProps {
  taskDescription: string
  onRemove: () => void
  onToggleComplete: (isChecked: boolean) => void
}

export function Task({
  taskDescription,
  onRemove,
  onToggleComplete,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleToggleComplete() {
    setIsChecked((prevChecked) => !prevChecked)
    onToggleComplete(!isChecked) // Invertendo o valor ao chamar o callback
  }

  return (
    <View style={styles.taskList}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={handleToggleComplete}
        color={isChecked ? '#5E60CE' : undefined}
      />
      <Text style={isChecked ? styles.completedTask : styles.textDescription}>
        {taskDescription}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
