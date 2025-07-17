import useTaskContext from '../../hooks/useTaskContext.ts';
import Task from '../../core/tasks/entities/Task.entitie.ts';

import { useForm } from '@mantine/form';
import { Button, Group, TextInput, ColorInput } from '@mantine/core';

function CreateTaskForm() {
  const { setTaskState } = useTaskContext();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      atividade: '',
      color: '',
    },
    validate: {
      atividade: value =>
        value.trim().length > 0 ? null : 'Atividade é obrigatório',
      color: value => (value.trim().length > 0 ? null : 'Cor é obrigatório'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    setTaskState(prevState => {
      const newTask = new Task(values.atividade, values.color, 0);
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  return (
    <form style={{ marginTop: 20 }} onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label='Atividade'
        placeholder='Ex.: Supino reto'
        {...form.getInputProps('atividade')}
      />
      <ColorInput
        label='Cor'
        format='hex'
        disallowInput
        swatches={[
          '#2e2e2e',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
        {...form.getInputProps('color')}
      />
      <Group mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
}

export default CreateTaskForm;
