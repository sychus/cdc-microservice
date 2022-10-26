import { Command, CommandRunner, Option } from 'nest-commander';
import { MonitorService } from '../service/monitor.service';

interface MonitorCommandOptions {
  username?: string;
  password?: string;
  token?: string;
}

@Command({ name: 'monitor', description: 'Subscriber for SF' })
export class MonitorRunner extends CommandRunner {
  constructor(private monitorService: MonitorService) {
    super();
  }
  async run(
    passedParam: string[],
    options?: MonitorCommandOptions,
  ): Promise<void> {
    if (options?.username && options?.password && options?.token) {
      const params = {
        username: options.username,
        password: options.password,
        token: options.token,
      };
      await this.monitorService.cdcSubscriptor(params);
    } else {
      this.errorHandler(options);
    }
  }

  @Option({
    flags: '-u, --username [username]',
    description: 'A salesforce username',
  })
  getUsername(val: string): string {
    // we can run some validation
    return val;
  }
  @Option({
    flags: '-p, --password [password]',
    description: 'A salesforce password',
  })
  getPassword(val: string): string {
    // we can run some validation
    return val;
  }
  @Option({
    flags: '-t, --token [token]',
    description: 'A salesforce token',
  })
  getToken(val: string): string {
    // we can run some validation
    return val;
  }

  errorHandler = (options) => {
    // need to handle some errors
    console.error('Error: ', options);
  };
}
