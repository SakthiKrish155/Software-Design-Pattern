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

const projectData = [
  { id: "P001", name: "Project Alpha", status: "In Progress", manager: "Alice Johnson", budget: "$5000.00" },
  { id: "P002", name: "Project Beta", status: "Completed", manager: "Bob Smith", budget: "$7500.00" },
  { id: "P003", name: "Project Gamma", status: "Pending", manager: "Charlie Brown", budget: "$3000.00" },
  // Add more projects as needed
];

const AdminProjects = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    teamLeader: "",
    teamMembers: "",
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
          <TableCaption className="bg-muted text-muted-foreground">Current Projects Overview</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">Project ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Project Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Status</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Manager</TableHead>
              <TableHead className="text-right bg-primary text-primary-foreground">Budget</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectData.map((project) => (
              <TableRow key={project.id} className="bg-card">
                <TableCell className="font-medium text-foreground">{project.id}</TableCell>
                <TableCell className="text-foreground">{project.name}</TableCell>
                <TableCell className="text-foreground">{project.status}</TableCell>
                <TableCell className="text-foreground">{project.manager}</TableCell>
                <TableCell className="text-right text-foreground">{project.budget}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center bg-primary text-primary-foreground' onClick={() => setFormVisible(true)}>
              <Plus /> Add Project
            </Button>
          </TableFooter>
        </Table>

        {/* Form Modal */}
        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add New Project</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='title'>Project Title</label>
                  <input
                    id='title'
                    name='title'
                    type='text'
                    value={formData.title}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='description'>Description</label>
                  <textarea
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='teamLeader'>Team Leader</label>
                  <input
                    id='teamLeader'
                    name='teamLeader'
                    type='text'
                    value={formData.teamLeader}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border border-border rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='teamMembers'>Team Members</label>
                  <input
                    id='teamMembers'
                    name='teamMembers'
                    type='text'
                    value={formData.teamMembers}
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

export default AdminProjects;
