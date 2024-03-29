import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import { withThemeColor } from "../higherorder/stylehoc";
import Delete from "../elements/delete";


const Message = withThemeColor(withIs(styled.aside.attrs(({ratio, styleName}) => ({
	className: `message ${ratio ? `${ratio}` : ''} ${styleName ? `is-${styleName}` : ''}`
}))``));

const MessageHeaderWrapper = styled.div.attrs(props => ({
	className: `message-header`
}))``;

export const MessageHeader = ({title, ...rest}) => (
	<MessageHeaderWrapper>
		<p>{title}</p>
		<Delete/>
	</MessageHeaderWrapper>
);

export const MessageBody = styled.div.attrs(props => ({
	className: `message-body`
}))``;

export default Message;