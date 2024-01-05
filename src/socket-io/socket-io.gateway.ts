// src/socket-io/socket-io.gateway.ts

import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketIoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket): void {
    // Handle connection logic
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    // Handle disconnection logic
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): void {
    // Handle incoming messages
    console.log(`Received message from ${client.id}: ${payload}`);
    this.server.emit('message', `Server received your message: ${payload}`);
  }
}
