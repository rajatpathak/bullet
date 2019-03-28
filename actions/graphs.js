
import api 			from '../api/graphs';
import constants 	from '../constants/graphs';
import environment 	from '../configuration/environment';
import schematic 	from '../schematics/graphs';

const 	graphs = { 
	
		error ( data ) {

			return {
				error 	: data ,
				type 	: constants.error
			};
		} ,

		get () {

			return {
				type 	: constants.get
			};
		} ,

		set ( data ) {

			return {
				market 	: data.market 	,
				prices 	: data.prices 	,
				type 	: constants.set
			};
		}

	};

export default {

	get ( id ) {

		return ( dispatch ) => {

			dispatch ( graphs.get ());

			// Get the currencies
			return api.get ( id )

				// Transform the reponse
				.then (( response ) => {

					return environment.data.mock ? response : response.json ();

				})
				
				// Dispatch the data
				.then (( data ) => {

					const normalised = schematic.get ( data );

					dispatch ( graphs.set ( normalised ));
				
				})
				
				// Or dispatch an error
				.catch ( function ( data ) {

					dispatch ( graphs.error ( data ));

				});
		}
	} ,

	reset () {
		
		return {
			type 	: constants.reset
		};
	}
};
