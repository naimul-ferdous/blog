import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EditScreen = ({navigation}) => {
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam('id')}</Text>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({})