import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert(
      'Silme İşlemi',
      `${todo?.id} numaralı todo'yu silmek istediğinize emin misiniz?`,
      [
        {
          text: 'Vazgeç',
        },
        {
          text: 'Sil',
          onPress: () => {
            const filteredTodos = todos.filter(item => item.id !== todo.id);
            setTodos(filteredTodos);
          },
          style: 'destructive',
        },
      ],
    );
  };

  const changeCompleted = () => {
    Alert.alert(
      'Yapıldı',
      'Görev yapıldı olarak işaretlenecek. Emin misiniz?',
      [
        {
          text: 'Vazgeç',
        },
        {
          text: 'İşaretle',
          onPress: () => {
            const tempArr = [];
            for (let i = 0; i < todos.length; i++) {
              if (todos[i].id !== todo.id) {
                tempArr.push(todos[i]);
              } else {
                const newTodo = {
                  ...todo,
                  completed: !todo.completed,
                };
                tempArr.push(newTodo);
              }
            }
            setTodos(tempArr);
          },
          style: 'destructive',
        },
      ],
    );
  };
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>{todo?.text}</Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCompleted}>
          <Icon
            name={todo?.completed ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
