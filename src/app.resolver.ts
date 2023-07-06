import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResovler {
  @Query(() => String)
  helloWorld() {
    return 'Hello World!';
  }
}
