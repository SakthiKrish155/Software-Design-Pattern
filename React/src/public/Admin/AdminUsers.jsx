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
import { Plus, Trash } from 'lucide-react';
import { toast } from 'sonner';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';

// Sample user data
const userData = [
  { id: "U001", name: "John Doe", designation: "Software Engineer", email: "john.doe@example.com", phone: "+1234567890" },
  { id: "U002", name: "Jane Smith", designation: "Product Manager", email: "jane.smith@example.com", phone: "+0987654321" },
  { id: "U003", name: "Mike Brown", designation: "UX Designer", email: "mike.brown@example.com", phone: "+1122334455" },
  // Add more users as needed
];

const AdminUsers = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
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
    toast.success("User added successfully!");
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      // Handle user deletion
      console.log("Deleting user with ID:", userToDelete);
      setUserToDelete(null);
      toast.success("User deleted successfully!");
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-secondary text-secondary-foreground">User Details Overview</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">User ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Designation</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Email</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Phone</TableHead>
              <TableHead className="text-right bg-primary text-primary-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id} className="bg-card">
                <TableCell className="font-medium text-foreground">{user.id}</TableCell>
                <TableCell className="text-foreground">{user.name}</TableCell>
                <TableCell className="text-foreground">{user.designation}</TableCell>
                <TableCell className="text-foreground">{user.email}</TableCell>
                <TableCell className="text-foreground">{user.phone}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant="outline"
                        className="mr-2"
                        onClick={() => setUserToDelete(user.id)}
                      >
                        <Trash /> Delete
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-4 bg-card text-card-foreground rounded shadow-lg'>
                      <p className='text-sm'>Are you sure you want to delete this user?</p>
                      <div className='flex justify-end mt-4'>
                        <Button
                          className='mr-2'
                          variant='destructive'
                          onClick={() => {
                            handleDeleteUser();
                            toast.success("User deleted successfully!");
                          }}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant='outline'
                          onClick={() => setUserToDelete(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center' onClick={() => setFormVisible(true)}>
              <Plus /> Add User
            </Button>
          </TableFooter>
        </Table>

        {/* Form Modal */}
        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add New User</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='name'>User Name</label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='designation'>Designation</label>
                  <input
                    id='designation'
                    name='designation'
                    type='text'
                    value={formData.designation}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='email'>Email</label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='phone'>Phone Number</label>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
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

export default AdminUsers;
