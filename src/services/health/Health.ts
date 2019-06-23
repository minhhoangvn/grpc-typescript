import * as grpc from 'grpc';
import { HealthService, IHealthServer } from '../../routes/health_grpc_pb';
import {
  HealthCheckRequest,
  HealthCheckResponse
} from '../../routes/health_pb';
import { ServiceError } from '../../utils';

const ServingStatus: typeof HealthCheckResponse.ServingStatus =
  HealthCheckResponse.ServingStatus;
const healthStatus: Map<string, HealthCheckResponse.ServingStatus> = new Map(
  Object.entries({})
);

class Health implements IHealthServer {
  public check(
    call: grpc.ServerUnaryCall<HealthCheckRequest>,
    callback: grpc.sendUnaryData<HealthCheckResponse>
  ): void {
    const service: string = call.request.getService();
    console.log(healthStatus);
    if (!healthStatus.has(service)) {
      return callback(
        new ServiceError(grpc.status.NOT_FOUND, 'NotFoundService'),
        null
      );
    }

    const res: HealthCheckResponse = new HealthCheckResponse();
    res.setStatus(<HealthCheckResponse.ServingStatus>healthStatus.get(service));
    callback(null, res);
  }
}

export { Health, HealthService, healthStatus, ServingStatus };
