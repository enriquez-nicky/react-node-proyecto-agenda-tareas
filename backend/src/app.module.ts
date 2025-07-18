import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'server-db-mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'agenda',
      autoLoadEntities: true,
      synchronize: true, // usar solo en desarrollo
    }),
    TasksModule,
  ],
})
export class AppModule {}
