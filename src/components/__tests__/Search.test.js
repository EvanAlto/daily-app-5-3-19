import React from 'react'
import { Search } from '../index'
import { mount } from 'enzyme'

let wrapper

beforeEach(() => {
  wrapper = mount(<Search />)
})

afterEach(() => {
  wrapper.unmount()
})

it('should render a button and an input', () => {
  expect(wrapper.find('input').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})
