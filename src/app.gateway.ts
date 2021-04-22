//import { Injectable } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
 } from '@nestjs/websockets';
 import { Logger } from '@nestjs/common';
 import { Socket, Server } from 'socket.io';

 @WebSocketGateway()
 export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
 
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, data: string): void {
   this.server.emit('msgToClient', data);
   console.log(data);
  }

  @SubscribeMessage('connected')
  handleConnect(): void {
    this.server.emit('connect')

  }
 
  afterInit(server: Server) {
    console.log('Init');
  }
 
  handleDisconnect(client: Socket) {
   console.log(`Client disconnected: ${client.id}`);
  }
 
  handleConnection(client: Socket, ...args: any[]) {
   console.log(`Client connected: ${client.id}`);
  }
 } 
