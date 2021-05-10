import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'teka',
  connector: 'postgresql',
  url: 'postgres://ptwmorex:GIXQcJZORUzEOTGcWFTEU7tCITC35PRV@isilo.db.elephantsql.com:5432/ptwmorex',
  host: 'localhost',
  port: 5432,
  user: 'loopback',
  password: '12341',
  database: 'db'
};
//host : 'localhost'
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TekaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'teka';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.teka', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
