// @flow
import { css } from '@emotion/core';
import { style, BP } from '@constants/';

const { COLORS: c } = style;

export default css`
  background-color: ${c.WHITE};
  padding: 1rem 0;

  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }

  @media screen and (min-width: ${BP.LG}) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
`;
