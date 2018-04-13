load('https://cdn.rawgit.com/NashornTools/NnClassLoader/master/NnClassLoader.js');


var L = new NnClassLoader({maven: ['com.github.mike10004:fengyouchao-sockslib:1.0.3', 'org.slf4j:slf4j-simple:1.7.12']});


var SocksProxyServerFactory = L.type('sockslib.server.SocksProxyServerFactory');
var User = L.type('sockslib.server.manager.User');


var port = $ARG[0];
var users = $ARG.length == 1 ? null : [
	new User($ARG[1], $ARG[2])
];

var socksProxyServer = users == null ? SocksProxyServerFactory.newNoAuthenticationServer(port) :
 						SocksProxyServerFactory.newUsernamePasswordAuthenticationServer(port, users);

socksProxyServer.start();

print(' >>--> Started SOCKS5 proxy at port ' + port);
