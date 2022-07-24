import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
		align-items: center;
		justify-content: space-around;
		background-color: #F8F8FF;
`;

export const KeyBoardAvoiding = styled.KeyboardAvoidingView``;

export const Wrapper = styled.View `
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
`;

export const DateContainer = styled.View`
    background-color: white;
    margin-top: 15px;
    border-radius: 6px;
    padding: 15px;
    border: 1px solid #c3c3c3 ;
`;

export const DateText = styled.Text`
	color: black;
	font-size: 14px;
`;

export const ButtonDateContainer = styled.View`
	flex: 1;
	flex-direction: row;
`;