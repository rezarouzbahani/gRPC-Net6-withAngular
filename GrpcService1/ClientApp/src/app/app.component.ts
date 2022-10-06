import { Component, OnInit } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import {
  ComplexRequestMsg,
  HelloReply,
  HelloRequest,
} from './generated/src/app/protos/greet_pb';

import {
  Greeter,
  GreeterClient,
  ServiceError,
} from './generated/src/app/protos/greet_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  response: any | null;
  ngOnInit(): void {
    this.startStream();
  }

  title = 'ClientApp';
  grpcClient!: Request;

  messages: string[] = [];

  startStream() {
    const request = new HelloRequest();
    request.setId(100);
    request.setName('Reza');
    request.setMessageid('500');
    let complexRequest = new ComplexRequestMsg();
    complexRequest.setDisplayname(' Value Of Display Name ');
    complexRequest.setGrades(20);
    request.setMsg(complexRequest);

    grpc.invoke(Greeter.SayHello, {
      request: request,
      host: `https://localhost:7288`,
      onMessage: (message: HelloReply) => {
        // This section works when server writes something to stream.
        const data = message.toObject();
        debugger;
      },
      onEnd: (
        code: grpc.Code,
        msg: string | undefined,
        trailers: grpc.Metadata
      ) => {
        // This section works when server close connection.

        if (code == grpc.Code.OK) {
          console.log('request finished wihtout any error');
        } else {
          console.log('an error occured', code, msg, trailers);
        }
      },
    });
  }
}
