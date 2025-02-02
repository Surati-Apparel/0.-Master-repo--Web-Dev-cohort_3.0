import { atom, selector, atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';
// import { TODOS } from './todos';

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: selector({
        key: 'notificationSelector',
        get: async () => {
            await new Promise(res => setTimeout(res, 5000));
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            return res.data;
        }
    })
})

export const todoAtomFaimily = atomFamily({
  key: 'todoAtomFamily',
  default: selectorFamily({
    key: 'todoSelectorFamily',
    get: (id) => {
        return async function({get}) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
            return response.data;
        }
    }
  })
})