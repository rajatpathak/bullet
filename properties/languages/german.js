
export default {
	
	de : {

		id 		: 'de' 			,
		names  	: {
			en 	: 'German' 		,
			es 	: 'Alemán' 		,
			de 	: 'Deutsche' 	,
			fr 	: 'Allemand' 	,
			ms 	: 'Jerman' 		,
			tr 	: 'Almanca' 	,
			vi 	: 'tiếng Đức' 	,
			zh 	: '德语'
		} ,

		actions 		: {
			ad 			: 'Gefördert' 								,
			all 		: 'alle' 									,
			add 		: 'Hinzufügen' 								,
			calculating : 'Berechnen...' 							,
			cancel 		: 'Stornieren' 								,
			load 		: 'Belastung' 								,
			loading 	: 'Laden...' 								,
			more 		: 'Weiterlesen' 							,
			refresh 	: 'Erneuern' 								,
			return 		: 'Zurück' 									,
			remove 		: 'Entfernen' 								,
			share 		: 'Aktie' 									,
			search 		: 'Bitte geben Sie einen Suchbegriff ein' 	,
			update 		: 'Aktualisieren'
		} ,
	
		denominations 	: {

			btc 		: {
				name 	: 'BitCoin' 	,
				symbol 	: 'BTC'
			}
		} ,

		errors : {
			500 			: 'Nicht verfügbar' ,
			ajax 			: 'Es gab einen Fehler beim Abrufen der Daten. Bitte versuche es erneut.' ,
			default 		: 'Oops - ein Fehler ist aufgetreten. Bitte starten Sie die Anwendung neu.'
		} ,

		screens : {

			bull 			: {

				404 		: 'Sieht aus wie in einem Problem in einigen der Daten. Wir konnten den letzten Bull - sorry nicht berechnen!' ,

				changes 	: {
					hour 	: 'Letzte Stunde' 	,
					day 	: 'Letzter Tag' 	,
					title 	: 'Bewegung' 		,
					week 	: 'Letzte Woche'
				} ,
				
				description : 'Die Bull-Rating ist eine Zahl, die auf dem Gesamtvolumen der Münzen basiert, die in den letzten 24 Stunden durch Marktkapitalisierung, Preis und neueste Trending Zeitrahmenwechsel bewegt werden. Der Zeitrahmen kann so wenig wie eine Stunde oder höchstens einen Tag sein. Je höher diese Zahl ist, desto wahrscheinlicher ist die Währung in einer positiven Richtung.' ,

				notice 		: 'Diese Bewertung basiert auf einer Berechnung von den Top-{{placeholder}} Krypto-Währungen.' ,

				market 			: {
					available 	: 'Versorgung verfügbar' 	,
					cap 		: 'Kapazität' 				,
					rank 		: 'Rang' 					,
					title 		: 'Markt' 					,
					total 		: 'Versorgung insgesamt' 	,
					updated 	: 'Letzte Aktualisierung' 	,
					volume 		: '24 Stunden Volumen'
				} 											,

				rating 			: 'Bull Bewertung' 			,

				title 			: 'Neueste Bull' 			,

				values 			: {
					title 		: 'Preise'
				}

			} ,
			
			currency 		: {
				title 		: 'Währung ändern'
			} ,

			currencies 		: {
				title 		:'Top {{length}} Währungen' ,
				headers 	: {
					rank 	: 'Rang' 	,
					change 	: '24H' 	,
					price 	: 'Preis' 	,
					rating 	: 'Bewertung' 
				} ,
				none 		: 'eine Währungen für Suchbegriff gefunden'
			} ,
			
			converter 		: {
				title 		: 'Konverter' ,
				placeholder : 'Menge'
			} ,

			detail 			: {
				title 		: 'Detail' 						,
				add 		: 'Zum Portfolio hinzufügen' 	,
				update 		: 'Portfolio aktualisieren'
			} ,

			exchanges 		: {
				title 		: 'Kauf'
			} ,

			language 		: {
				title 		: 'Sprache ändern'
			} ,
			
			news 			: {
				title 		: 'Nachrichten'
			} ,

			portfolio 		: {
				404 		: 'Sie haben Ihrem Portfolio keine Währungen hinzugefügt. Bitte fügen Sie sie aus dem Währungsdetailbildschirm hinzu und wir beraten Sie gerne von einem geschätzten Wert für Ihre Münzsammlung' ,
				description : 'Fügen Sie {{placeholder}} zu Ihrer Portfolio-Liste hinzu, um einen Überblick über alle Ihre Münzen und ihre kombinierten Wert zu halten.' ,
				headers 	: {
					amount 	: 'Menge' 	,
					name 	: 'Name' 	,
					price 	: 'Preis' 	,
					total 	: 'Gesamt'
				} ,
				title 		: 'Mappe'
			} ,

			settings 		: {
				title 		: 'Einstellungen'
			} ,

			share 			: {
				title 		: 'Cryptobullography' ,
				summary 	: 'Finde den neuesten Stier auf dem Krypto-Markt, der den größten Lärm macht! #Cryptobullography'
			} ,

			theme 			: {
				title 		: 'Thema ändern'
			} ,

			translations 	: {
				title 		: 'Übersetzung abgeben' ,
				action 		: 'Senden Sie eine Übersetzung' ,
				body 		: 'Diese Anwendung verwendet Google Translate, um mehrsprachige Unterstützung für unsere Nutzer zu bieten. Es könnte wohl viel besser sein. Wenn Sie eine andere Sprache sprechen und möchten, dass sie der Bewerbung hinzugefügt wurde, helfen Sie bitte, indem Sie eine Übersetzung einreichen.'
			} ,

			themes 			: {
				title 		: 'Thema abgeben',
				action 		: 'Senden Sie ein Thema' ,
				body 		: 'Wenn Sie ein Thema einreichen möchten, senden Sie bitte Ihre Farbpalette und den Themennamen und wir werden es der Anwendung hinzufügen.'
			} ,

			donate 		: {
				action 		: 'Kopiere {{placeholder}} Adresse' ,
				title 		: 'Spenden' ,
				body 		: 'Bitte helfen Sie dieser Anwendung bleiben Sie kostenlos und Weiterentwicklung durch Spenden. Durch Drücken der folgenden Schaltflächen wird die Brieftasche in die Zwischenablage kopiert.' ,
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
