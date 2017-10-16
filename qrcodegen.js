load('https://cdn.rawgit.com/NashornTools/NnClassLoader/master/NnClassLoader.js');


var L = new NnClassLoader({maven: ['com.google.zxing:core:3.3.0', 'com.google.zxing:javase:3.3.0']});


var MatrixToImageWriter = L.type('com.google.zxing.client.j2se.MatrixToImageWriter');
var MultiFormatWriter = L.type('com.google.zxing.MultiFormatWriter');
var BitMatrix = L.type('com.google.zxing.common.BitMatrix');
var EncoderConfig = L.type('com.google.zxing.client.j2se.EncoderConfig');
var BarcodeFormat = L.type('com.google.zxing.BarcodeFormat');
var EncodeHintType = L.type('com.google.zxing.EncodeHintType');
var ErrorCorrectionLevel = L.type('com.google.zxing.qrcode.decoder.ErrorCorrectionLevel');

var HashMap = java.util.HashMap;
var Files = java.nio.file.Files;
var Paths = java.nio.file.Paths;

var inputFileName = arguments[0];
var imageFormat = 'png';
var w = 512;
var h = 512;
var format = BarcodeFormat.QR_CODE;

var hints = new HashMap();

hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H); // High level 30%
hints.put(EncodeHintType.MARGIN, 5);
hints.put(EncodeHintType.CHARACTER_SET, 'UTF-8');

function readTextFile(filePath, charset) {
	var Charset = java.nio.charset.Charset;

	var lines = Files.readAllLines(Paths.get(filePath), Charset.forName(charset));
	var contents = Java.from(lines).join('\n');

	return contents;
}

print('input: ' + inputFileName);

var contents = readTextFile(inputFileName, 'UTF-8');

print();
print(contents);
print();

var matrix = new MultiFormatWriter().encode(contents, format, w, h);

var path = Paths.get(inputFileName + '.' + imageFormat);

print('output: ' + path);

MatrixToImageWriter.writeToPath(matrix, imageFormat, path);

print('Done!');