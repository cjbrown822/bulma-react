import React, {Fragment, useContext} from "react";
import styled from "styled-components";
import withIs from "../higherorder/sizehoc";
import { withThemeColor} from "../higherorder/stylehoc";
import {InputContext} from "../../store/inputcontext";
import PropTypes from "prop-types";

const SelectWrapper = withIs(withThemeColor(styled.div.attrs(({ratio, styleName, multiple, loading}) => ({
	className: `select ${ratio && `${ratio}`} ${styleName && `is-${styleName}`} ${multiple && `is-multiple`} ${loading && `is-loading`}`
}))``));

const Select = ({name, is, multiple, numRows,children, icon, ...rest}) => {
	const [ f1, f2, setHasIconsLeft] = useContext(InputContext);
	if(icon) setHasIconsLeft(true);
	return (
		<Fragment>
			<SelectWrapper is={is} multiple={multiple} {...rest}>
				<select multiple={multiple} size={numRows} name={name} {...rest}>
					{children}
				</select>
			</SelectWrapper>
			{icon && icon("left")}
		</Fragment>

	)
};

Select.propTypes = {
	name: PropTypes.string.isRequired
};

export default Select;