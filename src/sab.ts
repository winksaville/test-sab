function main(argv: string[]) {
    console.log(`sab:+ argv=${JSON.stringify(argv)}`);
    try {
        let sab = new SharedArrayBuffer(1 * 65536);
        console.log(`sab.byteLength=${sab.byteLength}`);
    } catch(err) {
        console.log(`err=${err}`);
    }
    console.log("sab:-");
}

main(process.argv);
