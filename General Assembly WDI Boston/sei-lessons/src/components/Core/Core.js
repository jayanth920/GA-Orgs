import React from 'react'
import styled from 'styled-components'
import { lighten, transparentize } from 'polished'
import { themeColors } from './ThemeVariables'
import Icon from '../../icons/Icons'

const buttonStyles = {
  default: {
    bg: '#fff',
    fg: '#707070',
    border: '#707070',
    hover: {
      bg: '#f6f6f6',
      fg: '#222',
      border: '#707070'
    }
  },
  ghost: {
    bg: 'transparent',
    fg: '#ececec',
    border: '#ececec',
    hover: {
      bg: '#383838',
      fg: '#fff',
      border: '#ececec'
    }
  },
  primary: {
    bg: themeColors.primary,
    fg: '#fff',
    border: themeColors.primary,
    hover: {
      bg: lighten(0.125, themeColors.primary),
      fg: '#fff',
      border: lighten(0.125, themeColors.primary)
    }
  },
  danger: {
    bg: '#fff',
    fg: themeColors.primary,
    border: '#c3c3c3',
    hover: {
      bg: themeColors.primary,
      fg: '#fff',
      border: themeColors.primary
    }
  }
}

const StyledButton = styled.button`
  align-items: center;
  background-color: ${props => props.variant ? buttonStyles[props.variant].bg : buttonStyles.default.bg};
  background-image: none;
  border: 1px solid transparent;
  border-color: ${props => props.variant ? buttonStyles[props.variant].border : buttonStyles.default.border};
  border-radius: 4px;
  box-shadow: 0 2px 0 ${transparentize(0.015, '#000')};
  color: ${props => props.variant ? buttonStyles[props.variant].fg : buttonStyles.default.fg};
  cursor: pointer;
  display: inline-flex;
  font-size: ${props => props.size === 'sm' ? '13.061px' : '16px'};
  font-weight: 500;
  height: ${props => props.size === 'sm' ? '28px' : '48px'};
  justify-content: center;
  line-height: 1.499;
  padding: ${props => props.size === 'sm' ? '0 16px' : '0 24px'};
  position: relative;
  white-space: nowrap;
  width: ${props => props.block ? '100%' : 'auto'};
  text-align: center;
  text-shadow: 0 -1px 0 ${transparentize(0.012, '#000')};
  touch-action: manipulation;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;

  &:hover {
    background-color: ${props => props.variant ? buttonStyles[props.variant].hover.bg : buttonStyles.default.hover.bg};
    border-color: ${props => props.variant ? buttonStyles[props.variant].hover.border : buttonStyles.default.hover.border};
    color: ${props => props.variant ? buttonStyles[props.variant].hover.fg : buttonStyles.default.hover.fg};
    text-decoration: none;
  }

  svg {
    margin-right: .5em;
  }

  span {
    padding-top: .15em;
  }
`

export const Button = (props) => (
  <StyledButton { ...props }>
    {props.icon && <Icon name={props.icon} scale={props.size === 'sm' ? 0.6 : 1} />}
    <span>{props.text}</span>
  </StyledButton>
)

const StyledLogo = styled.div`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M19.64 15.905c-.778 0-1.405.637-1.405 1.423 0 .787.627 1.423 1.404 1.423.774 0 1.405-.636 1.405-1.423 0-.786-.63-1.423-1.405-1.423' id='a'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M29.974 16.046c0-1.068.868-1.933 1.936-1.933l-.479-2.386a1.933 1.933 0 0 1-1.477-3.572l-1.353-2.024a1.933 1.933 0 0 1-2.732-2.733l-2.025-1.351a1.933 1.933 0 0 1-3.57-1.48L17.885.091a1.934 1.934 0 1 1-3.866 0l-2.387.476a1.93 1.93 0 0 1-1.045 2.524 1.93 1.93 0 0 1-2.525-1.044L6.038 3.399a1.93 1.93 0 0 1 0 2.732 1.93 1.93 0 0 1-2.732 0L1.953 8.155a1.932 1.932 0 1 1-1.477 3.572L0 14.113a1.933 1.933 0 1 1 0 3.866l.476 2.388a1.932 1.932 0 1 1 1.477 3.571l1.353 2.023a1.931 1.931 0 1 1 2.732 2.733l2.025 1.352a1.933 1.933 0 0 1 3.57 1.48l2.387.473a1.934 1.934 0 0 1 3.866 0l2.387-.474a1.932 1.932 0 0 1 3.57-1.48l2.026-1.35a1.933 1.933 0 1 1 2.732-2.732l1.353-2.027a1.933 1.933 0 0 1 1.48-3.57l.476-2.387a1.936 1.936 0 0 1-1.936-1.933z' fill='%23E41A23'/%3E%3Cpath fill='%23fff' d='M20.975 25.35l-.578-4.532h-1.53l-.577 4.532h-2.682l2.46-18.652h3.094l2.477 18.652zm-6.852-.793c-.587.631-1.405.956-2.517.956-1.109 0-1.892-.314-2.48-.945-.587-.631-.912-1.47-.912-2.517l.011-12.017c0-1.047.276-1.885.862-2.516.587-.631 1.393-.946 2.505-.946 1.11 0 1.893.315 2.482.946.587.63.91 1.47.91 2.516v2.883h-2.533l.002-3.093c0-.465-.394-.824-.866-.824a.82.82 0 0 0-.826.837v12.386c0 .466.351.83.822.83.472 0 .865-.369.865-.835V18.81h-.865v-2.267h3.401l.001 5.498c0 1.048-.276 1.886-.862 2.517z'/%3E%3Cuse fill='%23E41A23' xlink:href='%23a'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
`

export const Logo = (props) => <StyledLogo { ...props } />
