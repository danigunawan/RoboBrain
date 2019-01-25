import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

configure({ adapter: new Adapter() });
export const mockStore = configureMockStore([thunkMiddleware]);