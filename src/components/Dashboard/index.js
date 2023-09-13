import { observer } from 'mobx-react-lite'
import useStore from '../../hooks/useStore'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function Dashboard() {
    const { boards } = useStore()
    return (
        <Box p={2}>
            <DragDropContext onDragEnd={() => {}}>
                <Grid container>
                    {boards.active?.sections((section) => {
                        return (
                            <Grid item key={section.id}>
                                <Paper>
                                    <Box
                                        p={1}
                                        display="flex"
                                        alignItems="conter"
                                        justifyContent="center"
                                    >
                                        <Typography variant="h5">
                                            {section?.title}
                                        </Typography>
                                    </Box>
                                    <Droppable droppableId={section.id}>
                                        {(provided, snapshot) => <div></div>}
                                    </Droppable>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </DragDropContext>
        </Box>
    )
}

export default observer(Dashboard)
