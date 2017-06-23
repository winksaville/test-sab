# Test SharedArrayBuffer (sab)

# Prerequistes
- clang
- node
- yarn
- [llvmwasm-builder](https://github.com/winksaville/llvmwasm-builder) installed at ../llvmwasm-builder

# Install
```
$ yarn install
yarn install v0.24.6
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
$ yarn add.nodev9 && yarn postcleanup
yarn add.nodev9 v0.24.6
$ rm -rf nodev9 && mkdir nodev9 && curl https://nodejs.org/download/v8-canary/v9.0.0-v8-canary201706199cf43ea3fd/node-v9.0.0-v8-canary201706199cf43ea3fd-linux-x64.tar.xz -s -o node-v9.tar.xz && tar -xJf node-v9.tar.xz -C nodev9 --strip-components 1 && rm node-v9.tar.xz 
Done in 5.29s.
yarn postcleanup v0.24.6
$ mkdir -p build out .d 
Done in 0.09s.
Done in 5.96s.
```
