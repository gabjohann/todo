import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  taskList: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#262626',
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#333333',
  },

  checkbox: {
    borderRadius: 999,
    borderColor: '#4EA8DE',
  },

  textDescription: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'normal',
    color: '#F2F2F2',
  },

  completedTask: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'normal',
    color: '#808080',
    textDecorationLine: 'line-through',
  },
})
