// @flow
import { css } from '@emotion/core';

import { BP } from '@constants/';

export default css`
  display: block;
  margin: 0 auto;

  @media screen and (min-width: ${BP.SM}) {
    max-width: ${BP.SM};
  }

  @media screen and (min-width: ${BP.MD}) {
    max-width: ${BP.MD};
  }

  @media screen and (min-width: ${BP.LG}) {
    max-width: ${BP.LG};
  }

  @media screen and (min-width: ${BP.XL}) {
    max-width: ${BP.XL};
  }
`;
