import React from 'react'
import { CardContent, Typography } from '@material-ui/core'

const Task = ({ task }) => {
    return (
        <CardContent>
            <Typography
                color="textPrimary"
                gutterBottom
                style={{ fontSize: 18 }}
            >
                {task?.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                {task?.description}
            </Typography>
        </CardContent>
    )
}

export default Task
