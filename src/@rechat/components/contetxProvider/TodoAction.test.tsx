import axios, { AxiosResponse } from 'axios';
import { getTasks } from './TodoAction';
jest.mock('axios');

// Create an object of type of mocked Axios.
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('getTodos()', () => {
  test('should return todo list', async () => {
    //Our desired output
    const tasks = [
      {
        userId: 1,
        id: 1,
        title: 'todo-test-1',
        completed: false,
      },
      {
        userId: 2,
        id: 2,
        title: 'todo-test-2',
        completed: true,
      },
    ];
    
    //Prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: tasks,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    // Make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getTasks();
    expect(axios.get).toHaveBeenCalled();
  });
});
