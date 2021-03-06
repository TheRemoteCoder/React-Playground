import React from 'react';
import { useForm } from 'react-hook-form';


export default function Form1 () {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);


  console.log(watch('example')); // watch input value by passing the name of it


  // 'handleSubmit' will validate your inputs before invoking 'onSubmit'
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>

      {/* register your input into the hook by invoking the 'register' function */}
      <input name='example' placeholder='example' defaultValue='test' ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name='exampleRequired' placeholder='exampleRequired' ref={register({ required: true })} />
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type='submit' />
    </form>
  );
}

