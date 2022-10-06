import { Component, OnInit } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { HelloReply, HelloRequest } from './generated/src/app/protos/greet_pb';
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
    request.setName('Reza');

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

  firstTry() {
    const client = new GreeterClient('https://localhost:7288');
    const req = new HelloRequest();
    req.setName('Reza');
    debugger;
    client.sayHello(
      req,
      (err: ServiceError | null, response: HelloReply | null) => {
        debugger;
        if (err) {
          this.response = `Error: {err.message}`;
          return;
        }
        this.response = response?.getMessage();
        debugger;
      }
    );
  }
}
