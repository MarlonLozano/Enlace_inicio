import { Module } from '@nestjs/common'
import { RenderModule } from 'nest-next'
import Next from 'next'
import { AppController } from './app.controller'
import { resolve } from 'path'
import { MysqlModule } from './mysql.module'
import { TaskModule } from './tasks/task.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        RenderModule.forRootAsync(
            Next({
                dev: process.env.NODE_ENV !== 'production',
                dir: resolve(__dirname, '..'),
            }),
            { passthrough404: true, viewsDir: null, dev: true },
        ),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT, 10) || 3306,
            username: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || 'root',
            database: process.env.DB_DATABASE || 'scouts',
            autoLoadEntities: true, //Carga automaticamente todas las entidades/modelos registrados con TypeOrmModule.forFeature en los modulos
            synchronize: true,
        }),
        TaskModule,
    ]
})
export class AppModule { }