const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async(base = 1, listar, hasta) =>{

    try {
        
        let salida= '';
        let consola= '';

        for(let i=1; i<=hasta; i++ ){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${ colors.cyan('x')} ${i} ${colors.red('=')} ${base * i}\n`;
        }

        if(listar == true){
        console.log(colors.inverse('====================='));
        console.log(colors.bgMagenta(('   '),colors.brightWhite.bold('Tabla del', base,('     '))));
        console.log(colors.inverse('====================='));
        console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
        return `tabla-del-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
    
}

module.exports ={
    crearArchivo
}