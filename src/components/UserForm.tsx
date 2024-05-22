import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { supabase } from '../supabaseClient'; // Ensure this import path is correct

const UserForm = () => {
  const methods = useForm();
  const { register, handleSubmit, formState: { errors } } = methods;

  const uploadFile = async (file: File) => {
    // Implement the file upload logic here
    // Return the file path after upload
  };

  const onSubmit = async (data: any) => {
    try {
      if (data.file[0]) {
        const filePath = await uploadFile(data.file[0]);
        data.file = filePath ? `https://qbqjqwosxysmqvtbhszn.supabase.co/storage/v1/object/public/${filePath}` : null;
      }
      const { error } = await supabase.from('users').insert([data]);
      if (error) {
        console.error(error);
      } else {
        alert('User registered successfully!');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input {...register('username')} />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Address</label>
          <input {...register('address')} />
          {errors.address && <span>{errors.address.message}</span>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" value="male" {...register('gender')} /> Male
          <input type="radio" value="female" {...register('gender')} /> Female
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <div>
          <label>
            <input type="checkbox" {...register('terms')} /> Accept Terms
          </label>
          {errors.terms && <span>{errors.terms.message}</span>}
        </div>
        <div>
          <label>File</label>
          <input type="file" {...register('file')} />
          {errors.file && <span>{errors.file.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default UserForm;
