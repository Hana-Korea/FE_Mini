import { css } from '@emotion/react'
import styled from '@emotion/styled'
import MaterialButton from '@mui/material/Button'
import { ButtonProps } from './'
import { darken } from '@mui/material/styles'

export const Button = styled(MaterialButton)<ButtonProps>`
  ${({ bg }) =>
    bg
      ? css`
          background-color: ${bg};
          &:hover {
            background-color: ${darken(bg, 0.2)};
          }
        `
      : css``}
  ${({ fontColor }) =>
    fontColor
      ? css`
          color: ${fontColor};
        `
      : css``}
`
