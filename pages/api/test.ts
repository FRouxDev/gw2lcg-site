import { createHandler, Get } from 'next-api-decorators';

class UserHandler {
  @Get()
  getUsers() {
    return { users: ["John", "Sandra", "Michael"] };
  }
}

export default createHandler(UserHandler);