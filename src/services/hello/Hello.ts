import * as grpc from 'grpc';
import {
  GreeterService,
  IGreeterServer
} from '../../routes/helloworld_grpc_pb';
import { HealthCheckResponse } from '../../routes/health_pb';
import { HelloResponse, HelloRequest } from '../../routes/helloworld_pb';

class Hello implements IGreeterServer {
  constructor(healthStatus: Map<string, HealthCheckResponse.ServingStatus>) {
    healthStatus.set(
      'helloworld.Greeter',
      HealthCheckResponse.ServingStatus.SERVING
    );
  }
  public sayHello(
    call: grpc.ServerUnaryCall<HelloRequest>,
    callback: grpc.sendUnaryData<HelloResponse>
  ) {
    const requestName: string = call.request.getName();
    const res: HelloResponse = new HelloResponse();
    res.setMessage(`Reply from server and hello ${requestName}`);
    callback(null, res);
  }
}

export { Hello, GreeterService };
