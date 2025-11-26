import { render , screen} from '@testing-library/svelte';
import { expect, test} from 'vitest';
import userEvent from '@testing-library/user-event';
import Addition from './Addition.svelte';

test('Adition Component Test' , async ()=> {
 render(Addition);
    const [input1, input2] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    await userEvent.type(input1, '4');
    await userEvent.type(input2, '3');
    await userEvent.click(button);

    expect(screen.getByText('Result: 7')).toBeTruthy();
});