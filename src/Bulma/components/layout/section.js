import React from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";

const SectionWrapper = styled.div.attrs(({ ratio }) => ({
	className: `section ${ratio}`
}))``;

const Section = ({ ratio, children, ...rest }) => <SectionWrapper ratio={ratio} {...rest}>{children}</SectionWrapper>;

export default withIs(Section);