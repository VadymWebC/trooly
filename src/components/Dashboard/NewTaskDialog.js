import React, { useState, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    TextField,
    FormLabel,
    FormControl,
    Select,
    Button,
} from '@material-ui/core'
import useStore from '../../hooks/useStore'

const NewTaskDialog = ({ open, handleClose = () => {} }) => {
    const [formState, setFormState] = useState(null)
    const { users, boards } = useStore()
    const updateFormState = useCallback(
        (event) => {
            const { name, value } = event.target
            setFormState((prevState) => ({
                ...prevState,
                [name]: value ? value.trim() : '',
            }))
        },
        [setFormState]
    )
    const addNewTask = useCallback((event) => {
        event.preventDefault()
        boards.active.addTask(formState)
    }, [])
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Creating a New Task</DialogTitle>
            <form onSubmit={addNewTask}>
                <DialogContent style={{ minWidth: 500 }}>
                    <Box p={1}>
                        <TextField
                            fullWidth
                            required
                            type="text"
                            name="title"
                            label="Title"
                            onChange={updateFormState}
                            value={formState?.title || ''}
                        />
                    </Box>
                    <Box p={1}>
                        <TextField
                            fullWidth
                            required
                            type="text"
                            name="description"
                            label="Description"
                            onChange={updateFormState}
                            value={formState?.description || ''}
                        />
                    </Box>
                    <Box p={1}>
                        <FormControl fullWidth>
                            <FormLabel shrink>Assignee</FormLabel>
                            <Select
                                value={formState?.assignee || ''}
                                native
                                name="assignee"
                                onChange={updateFormState}
                            >
                                <option value="" disabled>
                                    -
                                </option>
                                {users?.List?.map((user) => {
                                    return (
                                        <option key={user.id} value={user?.id}>
                                            {user?.name}
                                        </option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                    <Button type="submit" color="primary">
                        Create
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default observer(NewTaskDialog)
