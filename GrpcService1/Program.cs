using GrpcService1.Services;

var builder = WebApplication.CreateBuilder(args);

// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

var MyAllowSpecificOrigins = "AllowAll";

builder.Services.AddCors(o => o.AddPolicy(MyAllowSpecificOrigins, builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader()
           .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));

//builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddGrpc();



var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);
//app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });

//app.UseRouting();
//// Configure the HTTP request pipeline.
////app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
////app.MapGrpcService<GreeterService>().EnableGrpcWeb();
//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapGrpcService<GreeterService>().EnableGrpcWeb().RequireCors(MyAllowSpecificOrigins);
//});
//app.MapGrpcService<GreeterService>().RequireCors(MyAllowSpecificOrigins);

//app.UseCors(MyAllowSpecificOrigins);

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{controller}/{action=Index}/{id?}");

//app.UseHttpsRedirection();


app.UseRouting();

app.UseGrpcWeb(new GrpcWebOptions { DefaultEnabled = true });
app.UseCors();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<GreeterService>().EnableGrpcWeb()
                                              .RequireCors(MyAllowSpecificOrigins);

    endpoints.MapGet("/", async context =>
    {
        await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
    });
});

app.Run();
