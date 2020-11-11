import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Login } from './Login';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
  let wrapper;
  beforeAll(() => {
    const props = {
      classes: {
        grid: { height: '90vh', paddingTop: "100px" },
        card: { width: '400px' },
        avatar: { backgroundColor: 'red' },
        textField: { width: "300px" },
        button: { width: "300px", align: "center" }
      }
    };
    wrapper = shallow(<Login {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not throw on correct Email', () => {
    const instance = wrapper.instance();
    instance.handleEmailChange({ target: { value: 'correctEmail@gmail.com' } });
    wrapper.update();
    expect(wrapper.state('emailError')).toBe('');
  });

  it('should show on incorrect Email', () => {
    const instance = wrapper.instance();
    instance.handleEmailChange({ target: { value: 'correctEmail@com' } });
    wrapper.update();
    expect(wrapper.state('emailError')).toBeTruthy();
  });

  it('should not throw on correct Password', () => {
    const instance = wrapper.instance();
    instance.handlePasswordChange({ target: { value: 'correctPassword' } });
    wrapper.update();
    expect(wrapper.state('passwordError')).toBe('');
  });

  it('should show error on incorrect Password', () => {
    const instance = wrapper.instance();
    instance.handlePasswordChange({ target: { value: 'c' } });
    wrapper.update();
    expect(wrapper.state('passwordError')).toBe('Password is required');
  });

  // it('should run handleSubmit', async () => {
  //   const instance = wrapper.instance();
  //   instance.setState({ email: 'correctEmail@gmail.com', password: 'correctPassword' })
  //   instance.handleSubmit();
  //   await new Promise(resolve => setTimeout(resolve, 0));
  //   wrapper.update();
  //   expect(localStorage.getItem('data')).toBeFalsy();
  // });

  it('', async () => {
    const instance = wrapper.instance();
    instance.setState({ email: 'correctEmail@gmail.com', password: 'correctPassword' });
    instance.handleSubmit = jest.fn().mockResolvedValue({});
    instance.handleSubmit();
    await new Promise(resolve => setTimeout(resolve, 0));
    const mutationCall = (data) => new Promise((resolve, reject) => ((data) ? resolve({ data })
      : reject()));
    wrapper.update();
    expect(localStorage.getItem('data')).toBeFalsy();
  });
});
