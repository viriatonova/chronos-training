import { useForm } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

function SettingsForm() {
  const form = useForm({
    mode: 'uncontrolled',
    // onSubmitPreventDefault: 'never'
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <form style={{ marginTop: 20 }} onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label='Atividade'
        placeholder='Supino reto'
        {...form.getInputProps('atividade')}
      />
      <TimeInput label='Descanso Curto' {...form.getInputProps('curto')} />
      <TimeInput label='Descanso Longo' {...form.getInputProps('longo')} />
      <NumberInput label='Ciclos' {...form.getInputProps('ciclos')} />
      <Group mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
}

export default SettingsForm;
