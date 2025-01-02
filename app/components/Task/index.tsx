import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/EvilIcons';

import { styles } from './styles';

interface TaskProps {
    name: string;
    checked: boolean;
    onDelete: () => void;
    onToggleChecked: (isChecked: boolean) => void;
}



export function Task({ name, checked, onDelete, onToggleChecked }: TaskProps) {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={17}
                fillColor={checked ? "#5E60CE" : "#4EA8DE"}
                isChecked={checked}
                onPress={(isChecked: boolean) => onToggleChecked(isChecked)}
            />
            <Text style={[styles.name, checked && styles.completedTask]}>
                {name}
            </Text>
            <TouchableOpacity onPress={onDelete}>
                <Icon name="trash" size={25} color="#808080" />
            </TouchableOpacity>
        </View>
    );
}