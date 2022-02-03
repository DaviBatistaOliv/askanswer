import * as path from 'path';

const options = {
  type: 'sqlite',
  database: 'data/askanswer.db',
  logging: true,
  entities: [path.join(__dirname, '/../**/**.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../../database/migrations/*')],
};

module.exports = options;
