import { useForm } from '@mantine/form';
import { Button, Group, TextInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

function AppSettings() {
  const form = useForm({
    mode: 'uncontrolled',
    // onSubmitPreventDefault: 'never'
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label='Treino'
        placeholder='Teino'
        {...form.getInputProps('name')}
      />
      <TimeInput
        label='Time'
        placeholder='Time'
        {...form.getInputProps('time')}
      />
      <TextInput
        label='Email'
        placeholder='Your email'
        {...form.getInputProps('email')}
      />
      <Group mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
}

export default AppSettings;
