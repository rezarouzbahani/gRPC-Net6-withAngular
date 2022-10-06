using Grpc.Core;
using GrpcService1;

namespace GrpcService1.Services
{
    public class GreeterService : Greeter.GreeterBase
    {
        private readonly ILogger<GreeterService> _logger;
        public GreeterService(ILogger<GreeterService> logger)
        {
            _logger = logger;
        }

        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HelloReply
            {
                ReplayId = 1,
                MessageId = "2",
                Name = request.Name,
                HelloReplyMsg = new ComplexReplyMsg()
                {
                    ComplexReplyMsgId = 3,
                    CorrelationId = "4",
                    GradesReply = 5,
                    SentAt = 6,
                    Version = 7,
                    Origin = "Origin 8",
                    DisplayNameReply = " Display Name Reply ",
                    Type = "Type 9"
                }
            });
        }
    }
}