import * as grpc from 'grpc';
import { IChatServer, ChatService } from '../../routes/chat/chat_grpc_pb';
import { Message } from '../../routes/chat/chat_pb';
import { ServiceError } from '../../utils';
