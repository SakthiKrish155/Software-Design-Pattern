import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const taskData = [
  { id: "T001", taskName: "Design UI", assignee: "John Doe", assignedTo: "Alice Johnson", dueDate: "2024-08-15" },
  { id: "T002", taskName: "Develop Backend", assignee: "Jane Smith", assignedTo: "Bob Smith", dueDate: "2024-08-20" },
  { id: "T003", taskName: "Test Application", assignee: "Mike Brown", assignedTo: "Charlie Brown", dueDate: "2024-09-01" },
  // Add more tasks as needed
];

const AdminTasks = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    taskName: "",
    assignee: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log("Form data submitted:", formData);
    setFormVisible(false); // Hide form after submission
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-muted text-muted-foreground">Current Tasks Overview</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">Task ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Task Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Assignee</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Assigned To</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taskData.map((task) => (
              <TableRow key={task.id} className="bg-card">
                <TableCell className="font-medium text-foreground">{task.id}</TableCell>
                <TableCell className="text-foreground">{task.taskName}</TableCell>
                <TableCell className="text-foreground">{task.assignee}</TableCell>
                <TableCell className="text-foreground">{task.assignedTo}</TableCell>
                <TableCell className="text-foreground">{task.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center bg-primary text-primary-foreground' onClick={() => setFormVisible(true)}>
              <Plus /> Add Task
            </Button>
          </TableFooter>
        </Table>

        {/* Form Modal */}
        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add New Task</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='taskName'>Task Name</label>
                  <input
                    id='taskName'
                    name='taskName'
                    type='text'
                    value={formData.taskName}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='assignee'>Assignee</label>
                  <input
                    id='assignee'
                    name='assignee'
                    type='text'
                    value={formData.assignee}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='assignedTo'>Assigned To</label>
                  <input
                    id='assignedTo'
                    name='assignedTo'
                    type='text'
                    value={formData.assignedTo}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='dueDate'>Due Date</label>
                  <input
                    id='dueDate'
                    name='dueDate'
                    type='date'
                    value={formData.dueDate}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='flex justify-end'>
                  <Button type='submit' className='mr-4 bg-primary text-primary-foreground'>Submit</Button>
                  <Button type='button' onClick={() => setFormVisible(false)} variant='outline'>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTasks;
