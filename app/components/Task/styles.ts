import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#262626',
        width: '100%',
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1,
    },
    name: {
        color: '#F2F2F2',
        width: '100%',
        overflowX: 'hidden',
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#808080',
    },
});