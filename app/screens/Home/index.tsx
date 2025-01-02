import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import { useState } from 'react';

import { styles } from "./styles";
import { Task } from "../../components/Task";

export default function Home() {
    const [tasks, setTasks] = useState<{ name: string, checked: boolean }[]>([]);
    const [taskName, setTaskName] = useState('');

    const [checkedTasks, setCheckedTasks] = useState(0);

    function handleTasksAdd() {
        if (tasks.some(task => task.name === taskName)) {
            return Alert.alert('Task já cadastrada', 'Essa Task já foi cadastrada');
        }

        setTasks(prevState => [...prevState, { name: taskName, checked: false }]);
        setTaskName('');
    }

    function handleTaskRemove(name: string) {
        Alert.alert('Remover task', `Remover a task ${name}`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task.name !== name));
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function handleToggleChecked(name: string, isChecked: boolean) {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.name === name) {
                    return { ...task, checked: isChecked };
                }
                return task;
            });

            const completedTasks = updatedTasks.filter(task => task.checked).length;
            setCheckedTasks(completedTasks);

            return updatedTasks;
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/images/rocket.png')} />
                <Text style={styles.title}>to<span style={styles.titleSpan}>do</span></Text>
            </View>

            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onChangeText={setTaskName}
                        value={taskName}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleTasksAdd}>
                        <Icon name="plus" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.tasks}>
                    <Text style={styles.allTasks}>
                        Criadas <span style={styles.budget}>{tasks.length}</span>
                    </Text>
                    <Text style={styles.checkedTasks}>
                        Concluídas <span style={styles.budget}>{checkedTasks}</span>
                    </Text>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <Task
                            key={item.name}
                            name={item.name}
                            checked={item.checked}
                            onDelete={() => handleTaskRemove(item.name)}
                            onToggleChecked={(isChecked) => handleToggleChecked(item.name, isChecked)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View>
                            <View style={styles.divider}/> 
                            <Image source={require('../../../assets/images/Clipboard.png')} style={styles.iconTask} />
                            <Text style={styles.listEmptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
