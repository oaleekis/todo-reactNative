import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        height: 127,
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        padding: 24,
    },
    title: {
        fontSize: 32,
        color: '#4EA8DE',
        marginLeft: 11,
    },
    titleSpan: {
        color: '#5E60CE',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -50,
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 4,
        borderColor: '#000',
        borderWidth: 1,
    },
    button: {
        height: 52,
        width: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    allTasks: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkedTasks: {
        color: '#5E60CE',
        fontSize: 14,
        fontWeight: 'bold',
    },
    budget: {
        color: '#D9D9D9',
        backgroundColor: '#333333',
        padding: 4,
        borderRadius: 5,
        height: 19,
        width: 25,
    },
    tasks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 20,
        width: '100%',
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#333',
    },
    listEmptyTitle: {
        color: '#808080',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#333',
        marginBottom: 20,
    },
    iconTask: {
        alignSelf: 'center',
        height: 56,
        width: 56,
    },
});