function getWinBalance(win, lose) {
	const sold = win - lose
	if (sold < 0) return 0
	else return sold
}

const victories = 51
const defeats = 0
let classification = ''
const ratings = [
	{
		class: 'Ferro',
		rating: [0, 10]
	},
	{
		class: 'Bronze',
		rating: [11, 20]
	},
	{
		class: 'Prata',
		rating: [21, 50]
	},
	{
		class: 'Ouro',
		rating: [51, 80]
	},
	{
		class: 'Diamante',
		rating: [81, 90]
	},
	{
		class: 'Lendário',
		rating: [91, 100]
	}
]

const winBalance = getWinBalance(victories, defeats)

if (winBalance >= 101) {
	console.log(
		`O herói tem um saldo de ${winBalance} vitórias e está no nível Imortal`
	)
} else {
	for (i = 0; i < 7; i++) {
		if (
			winBalance >= ratings[i].rating[0] &&
			winBalance <= ratings[i].rating[1]
		) {
			console.log(
				`O herói tem um saldo de ${winBalance} vitórias e está no nível ${ratings[i].class}`
			)
			break
		}
	}
}
