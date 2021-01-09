
import { UsersService } from './users.service';

describe('UsersService', () => {
  const service: UsersService = new UsersService();

  it('should be able to get user list', () => {
    expect(service.generateUsers(10).length).toEqual(10);
  });
});
