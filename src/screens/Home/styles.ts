import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
  },

  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    paddingHorizontal: 14,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -27,
    paddingBottom: 32,
  },

  input: {
    flex: 1,
    color: '#F2F2F2',
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 14,
    marginRight: 4,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    fontSize: 16,
  },

  button: {
    width: 54,
    height: 54,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  counterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  created: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },

  completed: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },

  counter: {
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
    backgroundColor: '#333333',
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginTop: 20,
    marginBottom: 48,
  },

  empty: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  strongText: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
  },

  regularText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#808080',
  },
})
