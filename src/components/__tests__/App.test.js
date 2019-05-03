import React from 'react'
import { Search, PostList, App } from '../index'
import { shallow } from 'enzyme'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('should render a Search component', () => {
  expect(wrapped.find(Search).length).toEqual(1)
})

it('should render a PostList component', () => {
  expect(wrapped.find(PostList).length).toEqual(1)
})

