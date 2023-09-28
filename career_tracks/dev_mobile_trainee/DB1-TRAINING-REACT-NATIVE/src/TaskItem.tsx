import React, {memo} from "react";

import { List, IconButton, MD3Colors } from 'react-native-paper';

import {TaskType } from './types';

type TaskItemPropsType = {
    task: TaskType;
    onRemovePress: (task: TaskType) => void;
}

const TaskItem = ({ task, onRemovePress}: TaskItemPropsType) => {
    const handlePress = () => {
        onRemovePress(task);
    }


return (
    <List.Item
    title={task.title}
    description={'#' + task.id}
    left={props => <List.Icon {...props} icon="text-box-check-outline" /> }
    right={() => (
        <IconButton
        icon="trash-can-outline"
        iconColor={MD3Colors.error40}
        size={20}
        onPress={handlePress} />
    )}
    />
);

}

export default memo(TaskItem);