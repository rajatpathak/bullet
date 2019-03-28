
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	Linking 			,
			ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		scene 					from '../styles/scene';
import 		exchanges 				from '../properties/exchanges';
import 		style 					from '../styles/list-control';
import 		analytics 				from '../utilities/analytics';

export default connect (

	state => ({
		language 	: state.language ,
		theme 		: state.theme
	})

) ( class Exchanges extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		const language 	= screenProps.language 	,
				theme 	= screenProps.theme 	;

		return {
			title 		: language.screens.exchanges.title ,
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()}
				theme 	= { theme 					}
				value 	= { language.actions.return }
			/>
			// tabBarIcon 	: ({ focused }) => {

			// 	return (
			// 		<Ionicons
			// 			name 	= 'ios-basket-outline'
			// 			size 	= { 32 											}
			// 			color 	= { focused ? theme.disabled : theme.secondary 	}
			// 		/>
			// 	);
			// }
		};
	};

	exchanges () {

		const theme = this.props.theme;

		return exchanges.map (( exchange , index ) => {

			const 	background 	= index % 2 === 0 ? theme.primary : theme.base ,
					appearance 	= style ( theme );

			return (
				<TouchableOpacity 
					key 	= { index 								}
					onPress = {() => {
						
						analytics.event ( 'exchange' , 'open' , exchange.name 	);
						Linking.openURL ( exchange.url 							);
					}}
					style 	= {{
						...appearance.control ,
						...{
							backgroundColor : background
						}
					}}
				>
					<Text style = { appearance.text }>
						{ exchange.name }
					</Text>
					<Ionicons
						name 	= { 'ios-arrow-forward-outline' }
						size 	= { 18 							}
						color 	= { theme.secondary 			}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const 	theme 	= this.props.theme 	,
				scenery = scene ( theme ) 	;

		return 				(
			<ScrollView style = { scenery.body }>
				{ this.exchanges ()}
			</ScrollView>
		);
	}
});
