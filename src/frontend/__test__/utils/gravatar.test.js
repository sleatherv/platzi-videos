import { expectationFailed } from '@hapi/boom';
import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'sleatherv28@hotmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/e48acffe13c6d350bb6e1604fb9b4c71';
  expect(gravatarUrl).toEqual(gravatar(email));
});
