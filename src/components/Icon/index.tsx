/* eslint-disable no-use-before-define */
import { ReactNode } from "react";
import * as Styled from "./styles";

type ComponentProps = {
	svg: ReactNode;
	isDisabled?: boolean;
	onClick?: () => unknown;
}

const Icon = ({ svg, isDisabled, onClick }: ComponentProps) => {
	return (
		<Styled.Icon onClick={ onClick } disabled={ isDisabled }>
			{ svg }
		</Styled.Icon>
	)
};

export { Icon };
