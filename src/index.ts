/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import ObjectsToCsv from "objects-to-csv";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	const ObjectsToCsv = require('objects-to-csv'); 
	class Aluno {
		Nome: string;
		Idade: number;
		Nota: number;

		constructor(n: string, i:number, nt:number) {
			this.Nome = n;
			this.Idade = i;
			this.Nota = nt;
		}
	}

	let Alunos: Array<Aluno> = [];

	const aluno1 = new Aluno(
		'Marcos',
		18,
		2
	);

	const aluno2 = new Aluno(
		'Zord',
		17,
		8
	);

	const aluno3 = new Aluno(
		'Hades',
		17,
		9
	);

	Alunos.push(aluno1, aluno2, aluno3);
		
	(async () => {
		const csv = new ObjectsToCsv(Alunos);


	await csv.toDisk('./alunos.csv'); 


	console.log(await csv.toString());
	})();

});
