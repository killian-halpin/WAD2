import express from 'express';
import { tasksData } from './tasksData';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// GET all tasks
router.get('/', (req, res) => {
    res.json(tasksData);
});

// Add a new task
router.post('/', (req, res) => {
    const { title, description, deadline, priority, done } = req.body;

    const newTask = {
        id: uuidv4(), 
        title,
        description,
        deadline,
        priority,
        done,
        created_at: new Date().toISOString(), // Set created at timestamp
        updated_at: new Date().toISOString()  // Set updated at timestap initially to created at timestamp 
    };

    tasksData.tasks.push(newTask); // Add the new task to the array
    tasksData.total_results++; // Increase the total results 
    res.status(201).json(newTask); 
});

// Update an existing task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasksData.tasks.findIndex(task => task.id === id); 

    if (taskIndex === -1) {
        return res.status(404).json({ status: 404, message: 'Task not found' }); 
    }

    // Update task with new data and update the new updated at timestamp
    const updatedTask = {
        ...tasksData.tasks[taskIndex], // Keep existing properties of the task 
        ...req.body, // Overwrite with new data provided in the request
        id: id, // The id remains unchanged
        updated_at: new Date().toISOString() // Update the timestamp
    };

    tasksData.tasks[taskIndex] = updatedTask; // Replace old task with the updated task
    res.json(updatedTask); // Responds with the updated task
});

// Delete a task
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasksData.tasks.findIndex(task => task.id === id); 

    if (taskIndex === -1) {
        return res.status(404).json({ status: 404, message: 'Task not found' }); 
    }

    tasksData.tasks.splice(taskIndex, 1); 
    tasksData.total_results--; 
    res.status(204).send(); 
});

export default router;