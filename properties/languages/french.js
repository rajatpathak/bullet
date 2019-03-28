
export default {
	
	fr : {

		id 		: 'fr' 				,
		names 	: {
			en 	: 'French' 			,
			es 	: 'Francés' 		,
			de 	: 'Französisch' 	,
			fr  : 'Français' 		,
			ms 	: 'Perancis' 		,
			tr 	: 'Fransızca' 		,
			vi 	: 'Người Pháp' 		,
			zh 	: '法国'
		} ,

		actions 		: {
			ad 			: 'Sponsorisé' 						,
			all 		: 'tout' 							,
			add 		: 'Ajouter' 						,
			calculating : 'Calculateur...' 					,
			cancel 		: 'Annuler' 						,
			load 		: 'Charge' 							,
			loading 	: 'Chargement...' 					,
			more 		: 'Lire la suite' 					,
			refresh 	: 'Rafraîchir' 						,
			return 		: 'Arrière' 						,
			remove 		: 'Retirer' 						,
			share 		: 'Partager' 						,
			search 		: 'Entrez un terme de recherche'  	,
			update 		: 'Mettre à jour'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' ,
				symbol 	: 'BTC'
			}
		} ,

		errors : {
			500 			: 'Indisponible' ,
			ajax 			: 'Une erreur s\'est produite lors de la récupération des données. Veuillez réessayer.' ,
			default 		: 'Oups: une erreur s\'est produite. Redémarrez l\'application.'
		} ,

		screens : {

			bull 			: {

				404 		: 'On dirait qu\'il y a eu un problème dans certaines données. Nous n\'avons pas pu calculer le dernier Bull - désolé!' ,

				changes 	: {
					hour 	: 'Dernière heure' 	,
					day 	: 'Dernier jour' 	,
					title 	: 'Mouvement' 		,
					week 	: 'La semaine dernière'
				} ,
				
				description : 'La note de Bull est un nombre basé sur le volume total de pièces de monnaie déplacé au cours des dernières 24 heures par le plafonnement du marché, le prix et le dernier changement de délai de tendance. Le délai peut être d\'une heure ou au plus jour. Plus ce nombre est élevé, plus il est probable que la devise se manifeste dans une direction positive.' ,

				notice 		: 'Cette notation est basée sur un calcul des principales monnaies cryptographiques {{placeholder}}.' ,

				market 			: {
					available 	: 'Fourniture disponible' 	,
					cap 		: 'Casquette' 				,
					rank 		: 'Rang' 					,
					title 		: 'Marché' 					,
					total 		: 'Total de l\'offre' 		,
					updated 	: 'Dernière mise à jour' 	,
					volume 		: 'Volume 24 heures'
				} 											,

				rating 			: 'Évaluation Du Toucher' 	,

				title 			: 'Dernier Taureau' 		,

				values 			: {
					title 		: 'Des prix'
				}

			} ,
			
			currency 		: {
				title 		: 'Changer de devise'
			} ,

			currencies 		: {
				title 		:'Haut {{length}} Devises' ,
				headers 	: {
					rank 	: 'Rang' 	,
					change 	: '24H' 	,
					price 	: 'Prix' 	,
					rating 	: 'Évaluation' 
				} ,
				one 		: 'Aucune devise trouvée pour le terme de recherche'
			} ,
			
			converter 		: {
				title 		: 'Convertisseur' ,
				placeholder : 'Montant'
			} ,

			detail 			: {
				title 		: 'Détail' 						,
				add 		: 'Ajouter au portefeuille' 	,
				update 		: 'Mise à jour du portefeuille'
			} ,

			exchanges 		: {
				title 		: 'Achat'
			} ,

			language 		: {
				title 		: 'Changer de langue'
			} ,
			
			portfolio 		: {
				404 		: 'Vous n\'avez ajouté aucune devise à votre portefeuille. Ajoutez-les à partir de l\'écran de détail de la devise et nous serons en mesure de vous informer d\'une estimation de votre collection de pièces.' ,
				description : 'Ajoutez {{placeholder}} à votre liste de portefeuille pour garder une trace de toutes vos pièces de monnaie et de leur valeur combinée.' ,
				headers 	: {
					amount 	: 'Montant' ,
					name 	: 'Prénom' 	,
					price 	: 'Prix' 	,
					total 	: 'Total'
				} ,
				title 		: 'Portefeuille'
			} ,

			news 			: {
				title 		: 'Nouvelles'
			} ,

			settings 		: {
				title 		: 'Paramètres'
			} ,

			share 			: {
				title 		: 'Cryptobullographie' ,
				summary 	: 'Trouvez le dernier Bull sur le marché de la cryptocurrence qui fait le plus gros bruit! #Cryptobullography'
			} ,

			theme 			: {
				title 		: 'Change le thème'
			} ,

			translations 	: {
				title 		: 'Soumettre une traduction' 	,
				action 		: 'Envoyer une traduction' 		,
				body 		: 'Cette application utilise Google Translate pour fournir un support multilingue à nos utilisateurs. Cela pourrait probablement être beaucoup mieux. Si vous parlez une autre langue et souhaitez que cela soit ajouté à la demande, veuillez vous en faire part de la traduction.'
			} ,

			themes 			: {
				title 		: 'Soumettre un thème'	,
				action 		: 'Envoyer un thème' 	,
				body 		: 'Si vous souhaitez soumettre un thème, veuillez envoyer votre palette de couleurs et votre nom de thème et nous l\'ajouterons à la demande.'
			} ,

			donate 		: {
				action 		: 'Copier {{placeholder}} adresse' ,
				title 		: 'Faire un don' ,
				body 		: 'Aidez cette application à rester libre et à développer en faisant un don. En appuyant sur les boutons ci-dessous, vous copiez l\'adresse du porte-monnaie dans votre presse-papiers.' ,
				wallets 	: [
					{
						name 	: 'Ethereum' ,
						id 		: '0x790b032d497131296eae4250a4840785dfcfd83e'
					} ,
					{
						name 	: 'BitCoin' ,
						id 		: '1MGkY3ZtvPVZUrg68eMdeKcjAv5FwD7hhm'
					} ,
					{
						name 	: 'LiteCoin' ,
						id 		: 'Li5YUuaso9Dzmf1ZB9qrh9QBfy9TWeLTdJ'
					} ,
					{
						name 	: 'Groestlcoin' ,
						id 		: 'FqmnNi5CVUi3wPBhzCZkTWRyE666j6oYat'
					} , 
					{
						name 	: 'NEO' ,
						id 		: 'ARr1SNboRfbHEjnpnrdVkpApz9cNknS7hL'
					}
				]
			}
		}
	}
};
