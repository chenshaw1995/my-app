import * as React from 'react';
import { mount } from 'enzyme';
import Resume from './Resume';
describe('Resume', () => {
    it('should render without exploding', () => {
        mount(<Resume />);
    })
})