/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../../components/Link/Link';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
