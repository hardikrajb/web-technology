var http=require('http');
var url=require('url');
var q=require('querystring');
function on_request(request,response){
    var path=url.parse(request .url).pathname;
    console.log('Request for'+path+'received');
    var query =url.parse(request.url).query;
    console.log(query);
    var name=q.parse(query)['username'];
    var mail=q.parse(query)['email'];
    var pass=q.parse(query)['pass'];
    response.write("Hello "+name+" your mail id is "+mail);
    response.write("your password is "+pass)
    response.end();
}
http.createServer(on_request).listen(8010);
console.log("Server started...");