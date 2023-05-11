import styled from '@emotion/styled'

export const PositionManagerContainer = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.app.size.font.large};
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
  }
`

export const PositionForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 12px;
  padding: 0 40px;
  height: 60px;
  background-color: ${({ theme }) => theme.app.palette.green3};
  border-radius: 5px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;

    &.position {
      margin-right: 8px;
    }

    input {
      flex-grow: 1;

      &#vacation {
        width: 120px;
      }
    }
  }
`
export const PositionList = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 250px;

  .table-header {
    font-weight: 600;
    line-height: 40px;
    background-color: ${({ theme }) => theme.app.palette.green3};
  }

  ul {
    overflow-y: scroll;
    max-height: 210px;

    .row {
      .edit {
        color: ${({ theme }) => theme.app.palette.gray1};
      }

      .delete,
      .confirm {
        color: ${({ theme }) => theme.app.palette.orange};
      }

      .btn {
        font-size: ${({ theme }) => theme.app.size.font.small};
        text-decoration: underline;
        cursor: pointer;
      }
    }

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.app.palette.gray1};
      border-radius: 20px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.app.palette.gray2};
      border-radius: 4px;
    }

    .row + .row {
      border-top: 1px solid ${({ theme }) => theme.app.palette.gray2};
    }
  }

  .row {
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 2fr;
    align-items: center;
    line-height: 40px;

    span {
      padding: 2px 25px;
      text-align: center;

      &.edit {
        width: 110px;
      }
    }

    input {
      justify-self: center;
      width: 120px;
    }
  }
`
