import { Server, ServerCredentials } from 'grpc';
import {
  Health,
  HealthService,
  healthStatus,
  ServingStatus
} from './services/health';
import { GreeterService, Hello } from './services/hello';
import { logger } from './utils';

let port: number = 50051;
if (process.env.NODE_APP_INSTANCE) {
  port = port + Number(process.env.NODE_APP_INSTANCE);
}
const server: Server = new Server();
server.addService(HealthService, new Health());
server.addService(GreeterService, new Hello(healthStatus));
server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
server.start();

logger.info(`gRPC:Server`, new Date().toDateString());
