load('https://cdn.rawgit.com/NashornTools/NnClassLoader/master/NnClassLoader.js');


var L = new NnClassLoader({maven: ['com.github.mike10004:fengyouchao-sockslib:1.0.3']});


var SocksProxyServerFactory = L.type('sockslib.server.SocksProxyServerFactory');
var User = L.type('sockslib.server.manager.User');


var PORT = 1080;


var users = [
	new User('user', 'pass')
];

var socksProxyServer = SocksProxyServerFactory.newUsernamePasswordAuthenticationServer(PORT, users);

socksProxyServer.start();

print(' >>--> Started SOCKS5 proxy at port ' + PORT);
