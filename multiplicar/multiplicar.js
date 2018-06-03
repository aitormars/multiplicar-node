//requireds
const fs = require('fs');
const colors = require('colors').argv;

let listarTabla = (base, limite = 10) => {


    if (!Number(base)) {
        reject(`La base ${base} no es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`EL límite ${limite} no es un número`);
        return;
    }

    console.log('==========================='.green);
    console.log(`======La tabla del ${base}======== `.green);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {

        console.log((`${base} * ${i} = ${base*i} \n`));

    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`EL límite ${limite} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base*i} \n`);

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}
module.exports = {
    crearArchivo,
    listarTabla
}