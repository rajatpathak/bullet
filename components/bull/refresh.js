
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/currencies';
import 		style 					from '../../styles/header';
import 		api 					from '../../api/currencies';
import 		analytics 				from '../../utilities/analytics';

export default connect (

	state => ({
		bull 		: state.bull 		,
		currency 	: state.currency 	,
		language 	: state.language 	,
		theme 		: state.theme
	})

) ( class Refresh extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.refresh = this.refresh.bind ( this );
	}

	refresh () {

		const action = this.props.bull.competitors > api.limit ? 'stream' : 'get';

		analytics.event ( 
			'bull' 		, 
			'refresh' 	, 
			action 		,
			'user' 
		);
		this.props.dispatch ( actions [ action ] ( this.props.currency.id ));
	}

	render () {

		const 	theme 		= this.props.theme 	,
				appearance 	= style ( theme ) 	;

		if ( this.props.bull.loading ) {
			
			return null;
		}

		return (
			<TouchableOpacity 
				onPress = { this.refresh 			}
				style 	= { appearance.right.icon 	}
			>
				<Ionicons
					name 	= { 'ios-refresh-outline' 	}
					size 	= { 32 						}
					color 	= { theme.secondary 		}
				/>
			</TouchableOpacity>
		);
	}
});