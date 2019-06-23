const path = require('path');
const shell = require('shelljs');
const rimraf = require('rimraf');
const fs = require('fs');

// https://github.com/shelljs/shelljs/issues/469
process.env.PATH +=
  path.delimiter + path.join(process.cwd(), 'node_modules', '.bin');

const PROTO_DIR = path.join(__dirname, '..', 'protos');
const ROUTE_DIR = path.join(__dirname, '..', 'src', 'routes');
const PROTOC_GEN_TS_PATH = path.join(
  __dirname,
  '../node_modules/.bin/protoc-gen-ts'
);

// https://github.com/agreatfool/grpc_tools_node_protoc_ts/tree/master/examples
function genProtoFiles(protoDir) {
  const protoPaths = getDirectoriesRecursive(protoDir);
  const protoGeneratePaths = protoPaths.map(generateDestinationPath);
  for (let pathIndex = protoPaths.length - 1; pathIndex >= 0; pathIndex--) {
    genProtoFile(protoPaths[pathIndex], protoGeneratePaths[pathIndex]);
  }
}

function genProtoFile(protoPath, generatePath) {
  if (!fs.existsSync(generatePath)) {
    shell.mkdir('-p', generatePath);
  }
  shell.exec(
    'grpc_tools_node_protoc ' +
      `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" ` +
      `--grpc_out="${generatePath}" ` +
      `--js_out="import_style=commonjs,binary:${generatePath}" ` +
      `--ts_out="${generatePath}" ` +
      `--proto_path ${protoPath} ${protoPath}/*.proto`
  );
}

function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(sourcePath) {
  return fs
    .readdirSync(sourcePath)
    .map(file => path.join(sourcePath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(sourcePath) {
  return [
    sourcePath,
    ...flatten(getDirectories(sourcePath).map(getDirectoriesRecursive))
  ];
}

function generateDestinationPath(sourcePath) {
  return sourcePath.replace(PROTO_DIR, ROUTE_DIR);
}

rimraf.sync(`${ROUTE_DIR}/*`);

genProtoFiles(PROTO_DIR);
